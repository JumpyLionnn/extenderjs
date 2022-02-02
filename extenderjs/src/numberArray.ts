import { Random } from "./random";

export class NumberArray extends Array<number>{
    public static random(length: number, max: number, min: number = 0): NumberArray{
        return new NumberArray(...Array.from({ length }, (): number=> Random.randomFloat(max, min)));
    }

    public static randomInt(length: number, max: number, min: number = 0): NumberArray{
        return new NumberArray(...Array.from({ length }, (): number=> Random.randomInt(max, min)));
    }


    public sum(): number{
        return this.reduce((acc: number, element: number) => acc + element, 0);
    }

    public average(): number{
        return this.isEmpty() ? 0 : this.sum() / this.length;
    }

    public median(): number{
        if (this.isEmpty()) throw new Error("Cannot take the median of an empty number array.");
        const sortedArray = this.clone().sort((a: number, b: number) => a - b);

        const middle = Math.floor(sortedArray.length / 2);
        
        if (sortedArray.length % 2)
            return sortedArray[middle];
        
        return (sortedArray[middle - 1] + sortedArray[middle]) / 2.0;
    }

    public prevalence(): Map<number, number>{
        return this.countBy((value: number) => value);
    }

    public max(): number{
        return Math.max(...this);
    }

    public min(): number{
        return Math.min(...this);
    }

    public override clone(): NumberArray{
        return new NumberArray(...this.slice());
    }
}