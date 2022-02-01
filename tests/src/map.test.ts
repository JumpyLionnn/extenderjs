import "mocha";
import { assert } from "chai";

import "extenderjs";


describe("map", ()=> { 
    const testMap = new Map([
        ["1", 1],
        ["2", 2],
        ["3", 3],
        ["4", 4],
        ["5", 5],
        ["6", 6],
        ["7", 7],
        ["8", 8],
        ["9", 9],
        ["10", 10]
    ]);
    describe("hasValue", ()=> {
        it("returns the right value", () => {
            assert.isTrue(testMap.hasValue(2));
            assert.isTrue(testMap.hasValue(7));

            assert.isFalse(testMap.hasValue(18));
            assert.isFalse(testMap.hasValue(-4));
        });
    });

    describe("toPairs", ()=> {
        const pairs = testMap.toPairs();
        it("returns the right amount pairs", () => {
            assert.equal(pairs.length, testMap.size);
        });
        it("returns the right pairs", () => {
            
            assert.equal(pairs[1].first, "2");
            assert.equal(pairs[1].second, 2);

            assert.equal(pairs[4].first, "5");
            assert.equal(pairs[4].second, 5);
        });
    });

    describe("contains / includes", ()=> {
        it("returns the right value", () => {
            assert.isTrue(testMap.contains("2"));
            assert.isTrue(testMap.includes("8"));


            assert.isFalse(testMap.contains("11"));
            assert.isFalse(testMap.includes("-23"));
        });
    });

    describe("containsValue / includesValue", ()=> {
        it("returns the right value", () => {
            assert.isTrue(testMap.containsValue(2));
            assert.isTrue(testMap.includesValue(8));


            assert.isFalse(testMap.containsValue(11));
            assert.isFalse(testMap.includesValue(-23));
        });
    });
});