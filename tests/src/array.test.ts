import "mocha";
import { assert } from "chai";

import "extenderjs";


describe("array", ()=> {
    describe("remove", ()=> {
        it("returns the right value", () => {
            const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            const value = array[2];
            assert.equal(array.remove(2), value);
        });
        it("actually removes the index", () => {
            const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            const zero = array[0];
            const one = array[1];
            const three = array[3];
            const four = array[4];
            array.remove(2);
            assert.equal(array[0], zero);
            assert.equal(array[1], one);
            assert.equal(array[2], three);
            assert.equal(array[3], four);
        });
    });

    describe("removeElement", ()=> {
        it("returns the index", () => {
            const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            assert.equal(array.removeElement(2), 1);
        });
        it("actually removes the element", () => {
            const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            array.removeElement(2);
            assert.equal(array.indexOf(2), -1);
        });
        it("removes only 1 element", () => {
            const array = [1, 2, 3, 4, 5, 6, 2, 7, 8, 9, 10];
            array.removeElement(2);
            assert.notEqual(array.indexOf(2), -1);
        });
    });
    describe("clone / copy", ()=> {
        it("cloned array is not a reference for the old one", () => {
            const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            assert.notEqual(array.clone(), array);
            assert.notEqual(array.copy(), array);
        });
    });

    describe("first / last", ()=> {
        it("returns the correct value", () => {
            const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            assert.equal(array.first(), array[0]);
            assert.equal(array.last(), array[array.length - 1]);
        });
    });

    describe("clear", ()=> {
        it("clears the array", () => {
            const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            array.clear();
            assert.equal(array.length, 0);
        });
    });

    describe("isEmpty", ()=> {
        it("returns false when the array is not empty", () => {
            const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            assert.isFalse(array.isEmpty());
        });
        it("returns true when the array is not empty", () => {
            const array: number[] = [];
            assert.isTrue(array.isEmpty());
        });
    });

    describe("sortBy", ()=> {
        it("sorts", () => {
            const array = [{ value: 10 }, { value: 6 }, { value: 2 }, { value: 4 }, { value: 8 }];
            array.sortBy((element: { value: number })=> element.value);
            assert.deepEqual(array, [{ value: 2 }, { value: 4 }, { value: 6 }, { value: 8 }, { value: 10 }]);
        });
    });

    describe("countBy", ()=> {
        it("counts", () => {
            const array = [{ value: 10 }, { value: 10 }, { value: 2 }, { value: 4 }, { value: 4 }];
            const result = array.countBy((element: { value: number })=> element.value);
            assert.deepEqual(result, new Map<number, number>([[10, 2], [2, 1], [4, 2]]));
        });
    });

    describe("shuffle", ()=> {
        it("shuffles", () => {
            const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            assert.notDeepEqual(array2.shuffle(), array1);
            assert.notDeepEqual(array2, array1);
        });
    });

    describe("equals", ()=> {
        it("returns false when not equal", () => {
            const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11];
            assert.isFalse(array1.equals(array2));
        });
        it("returns true when equal", () => {
            const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            assert.isTrue(array1.equals(array2));
        });
    });

    describe("size", ()=> {
        it("returns length", () => {
            const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            assert.isTrue(array.contains(2));
        });
    });
    describe("contains", ()=> {
        it("returns true when the array includes an element", () => {
            const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            assert.equal(array.size, array.length);
        });
        it("returns false when the array doesn't includes an element", () => {
            const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            assert.isFalse(array.contains(20));
        });
    });

    describe("zip", ()=> {
        it("throws error", () => {
            const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
            assert.throws(() => Array.zip(array1, array2));
        });
        it("zips correctly", () => {
            const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            assert.deepEqual(Array.zip(array1, array2), [
                [1, 1],
                [2, 2],
                [3, 3],
                [4, 4],
                [5, 5],
                [6, 6],
                [7, 7],
                [8, 8],
                [9, 9],
                [10, 10]
            ]);
        });
    });
});