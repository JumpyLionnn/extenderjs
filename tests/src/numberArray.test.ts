import "mocha";
import { assert } from "chai";

import { NumberArray } from "extenderjs";

describe("numberArray", () => {
    const array = new NumberArray(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    const emptyArray = new NumberArray();
    describe("sum", () => {
        it("returns the right value", () => {
            assert.equal(array.sum(), 55);
        });

        it("empty array", () => {
            assert.equal(emptyArray.sum(), 0);
        });
    });

    describe("average", () => {
        it("returns the right value", () => {
            assert.equal(array.average(), 5.5);
        });

        it("empty array", () => {
            assert.equal(emptyArray.average(), 0);
        });
    });

    describe("median", () => {
        it("returns the right value for even array", () => {
            assert.equal(array.median(), 5.5);
        });

        it("returns the right value for odd array", () => {
            const oddArray = new NumberArray(1, 2, 3, 4, 5, 6, 7, 8, 9);
            assert.equal(oddArray.median(), 5);
        });

        it("empty array", () => {
            assert.throws(() => emptyArray.median());
        });
    });

    describe("prevalence", () => {
        it("returning the right value", () => {
            const numberArray = new NumberArray(1, 1, 2, 3, 4, 1, 2);
            const result = numberArray.prevalence();
            assert.deepEqual(result, new Map<number, number>([[1, 3], [2, 2], [3, 1], [4, 1]]));
        });
        it("empty array", () => {
            const numberArray = new NumberArray();
            const result = numberArray.prevalence();
            assert.deepEqual(result, new Map<number, number>());
        });
    });

    describe("min / max", () => {
        it("min", () => {
            assert.equal(array.min(), 1);
        });
        it("max", () => {
            assert.equal(array.max(), 10);
        });
    });

    describe("clone / copy", ()=> {
        it("cloned array is not a reference for the old one", () => {
            assert.notEqual(array.clone(), array);
            assert.notEqual(array.copy(), array);
        });
    });

    describe("random", ()=> {
        it("random float", () => {
            const array1 = NumberArray.random(100, 100, 0);
            const array2 = NumberArray.random(100, 100, 0);
            assert.notDeepEqual(array1, array2);
        });
        it("random int", () => {
            const array1 = NumberArray.randomInt(100, 100, 0);
            const array2 = NumberArray.randomInt(100, 100, 0);
            assert.notDeepEqual(array1, array2);
        });

        it("correct types", () => {
            const array1 = NumberArray.random(100, 100, 0);
            const array2 = NumberArray.randomInt(100, 100, 0);
            assert.isFalse(Number.isInteger(array1[1]));
            assert.isTrue(Number.isInteger(array2[1]));
        });
    });
});