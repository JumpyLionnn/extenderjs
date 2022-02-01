export class Pair<T1, T2>{
    public first: T1;
    public second: T2;
    public constructor(first: T1, second: T2){
        this.first = first;
        this.second = second;
    }

    public static fromArray<T>(array: T[]): Pair<T, T>[]{
        if (array.length % 2 !== 0){
            throw new Error("Cannot make pairs from an array with an odd length.");
        }
        const result: Pair<T, T>[] = [];
        for (let i = 0; i < array.length; i += 2) {
            result.push(new Pair(array[i], array[i + 1]));
        }
        return result;
    }

    public toString(): string{
        return `(${this.first}, ${this.second})`;
    }
}