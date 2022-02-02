export {};
declare global {
    interface Array<T>{
        remove(index: number): T;
        removeElement(element: T): number;
        clone(): T[];
        first(): T | undefined;
        last(): T | undefined;
        clear(): void;
        isEmpty(): boolean;
        sortBy<propertyType>(propertyFn: (element: T)=> propertyType): T[];
        countBy<propertyType>(propertyFn: (element: T)=> propertyType): Map<propertyType, number>;
        shuffle(): T[];
        equals(array: T[]): boolean;
    
        // aliases
        copy(): T[];
        readonly size: number;
        contains(element: T, fromIndex?: number): boolean;
    
        // built-in array method correction
        at(index: number): T;
    }
    
    interface ArrayConstructor{
        zip<T>(...array: T[][]): T[][];
    }    
}




Array.prototype.remove = function<T>(index: number): T{
    return this.splice(index, 1)[0]; 
};


Array.prototype.removeElement = function<T>(element: T): number{
    const index = this.indexOf(element);
    this.remove(index);
    return index;
};


Array.prototype.clone = function<T>(): T[]{
    return this.slice();
};

Array.prototype.first = function<T>(): T{
    return this.at(0);
};


Array.prototype.last = function<T>(): T{
    return this.at(-1);
};


Array.prototype.clear = function<T>(): void{
    this.splice(0, this.length);
};

Array.prototype.isEmpty = function<T>(): boolean{
    return this.length === 0;
};


Array.prototype.sortBy = function<T, propertyType>(propertyFn: (element: T)=> propertyType): T[]{
    return this.sort((a: T, b: T): number=> defaultCompare(propertyFn(a), propertyFn(b)));
};

Array.prototype.countBy = function<T, propertyType>(propertyFn: (element: T)=> propertyType): Map<propertyType, number>{
    const result: Map<propertyType, number> = new Map();
    this.forEach((value: T) => {
        const property = propertyFn(value);
        result.set(property, (result.get(property) ?? 0) + 1);
    });
    return result;
};

Array.prototype.shuffle = function<T>(): T[]{
    return this.sort((a: T, b: T) => 0.5 - Math.random());
};

Array.prototype.equals = function<T>(array: T[]): boolean{
    return this.every((element: T, index: number) => element === array[index]);
};

Array.prototype.copy = function<T>(): T[]{
    return this.clone();
};

// getter
Object.defineProperty(Array.prototype, "size",  {
    get<T>() {
        return (<T[]>this).length;
    }
});

Array.prototype.contains = function<T>(element: T, fromIndex?: number): boolean{
    return this.includes(element, fromIndex);
};

Array.zip =  function<T>(...arrays: T[][]): T[][]{
    if (arrays.length < 2){
        throw new Error("You can zip only 2 and above arrays.");
    }
    arrays.forEach((array: T[])=>{
        if (arrays[0].length !== array.length){
            throw new Error("All the zipped array's length must match.");
        }
    });
    const zipped: T[][] = [];
    for (let i = 0; i < arrays[0].length; i++) {
        zipped.push(arrays.map((row: T[]) => row[i]));
    }
    return zipped;
};

function defaultCompare<T>(a: T, b: T): number{
    if (a < b) 
        return -1;
    else if (a > b) 
        return 1;
    else 
        return 0;
}