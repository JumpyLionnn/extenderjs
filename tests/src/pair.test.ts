import "mocha";
import { assert } from "chai";

import { Pair } from "extenderjs";

describe("pair", () => {
    describe("fromArray", () => {
        const array = ["key1", "value1", "key2", "value2", "key3", "value3", "key4", "value4"];
        const pairArray = Pair.fromArray(array);
        it("pair amount", () => {
            assert.equal(pairArray.length, array.length / 2);
        });

        it("correct pairs", () => {
            
            assert.deepEqual(pairArray, [
                new Pair("key1", "value1"), 
                new Pair("key2", "value2"), 
                new Pair("key3", "value3"), 
                new Pair("key4", "value4")
            ]);
        });

        it("array with odd length", () => {
            const oddArray = ["key1", "value1", "key2", "value2", "key3", "value3", "key4"];
            assert.throws(() => Pair.fromArray(oddArray));
        });
    });

    describe("toString", () => {
        it("returns the right string", () => {
            const pair = new Pair(1, 2);
            assert.equal(pair.toString(), "(1, 2)");
        });
    });
});