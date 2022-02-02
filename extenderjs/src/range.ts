export function* range(start: number, stop?: number, step: number = 1): Generator<number>{
    const stopIndex = stop ?? start;
    for (let i = stop === undefined ? 0 : start; i < stopIndex; i += step) {
        yield i;
    }
}