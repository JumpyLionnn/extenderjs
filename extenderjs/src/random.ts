export class Random{
    private constructor(){}

    public static random(): number {
        return Math.random();
    }

    public static randomInt(max: number, min: number = 0): number {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    public static randomFloat(max: number, min: number = 0,): number {
        return Math.random() * (max - min) + min;
    }

    public static choice<T>(array: T[]): T | undefined {
        return array[this.randomInt(0, array.length)];
    }

    public static randomString(length: number, characters: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"): string{
        let result = "";
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }
}