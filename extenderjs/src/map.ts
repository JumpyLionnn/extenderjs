import { Pair } from "./pair";

declare global{
    interface Map<K, V>{
        hasValue(value: V): boolean;
        toPairs(): Pair<K, V>[];
    
        // aliases
        contains(value: K): boolean;
        includes(value: K): boolean;
        containsValue(value: V): boolean;
        includesValue(value: V): boolean;
    }
}

Map.prototype.hasValue = function<K, V>(value: K): boolean{
    for (const mapValue of this.values()) {
        if (value === mapValue)
            return true;
    }
    return false;
};

Map.prototype.toPairs = function<K, V>(): Pair<K, V>[]{
    const array = [];
    for (const [key, value]of (<Map<K, V>>this).entries()) {
        array.push(new Pair<K, V>(key, value));
    }
    return array;
};




Map.prototype.contains = function<K, V>(key: K): boolean{
    return this.has(key);
};

Map.prototype.includes = function<K, V>(key: K): boolean{
    return this.has(key);
};


Map.prototype.containsValue = function<K, V>(value: V): boolean{
    return this.hasValue(value);
};

Map.prototype.includesValue = function<K, V>(value: V): boolean{
    return this.hasValue(value);
};
