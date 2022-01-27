import "mocha";
import { assert }from "chai";

import { Random }from "extenderjs";

describe("random", () => {
    const min = 1;
    const max = 30;
    const maxIterations = 40;
    const maxEqual = maxIterations / max * 10;
    describe("randomInt", () => {
        it("should be inside the bounds", () => {
            for (let i = 0; i < 20; i++) {
                const random = Random.randomInt(max, min);
                assert.isBelow(random, max);
                assert.isAbove(random, min - 1);
            }

            for (let i = 0; i < 20; i++) {
                const random = Random.randomInt(max);
                assert.isBelow(random, max);
                assert.isAbove(random, -1);
            }
        });
        it("should be random", () => {
            let lastResult = 0;
            let equalCount = 0;
            for (let i = 0; i < maxIterations; i++) {
                const random = Random.randomInt(max, min);
                if (random === lastResult){
                    equalCount++;
                }
                lastResult = random;
            }
            assert.isBelow(equalCount, maxEqual);
        });
    });


    describe("randomFloat", () => {
        it("should be inside the bounds", () => {
            for (let i = 0; i < 20; i++) {
                const random = Random.randomFloat(max, min);
                assert.isBelow(random, max);
                assert.isAbove(random, min - 1);
            }

            for (let i = 0; i < 20; i++) {
                const random = Random.randomFloat(max);
                assert.isBelow(random, max);
                assert.isAbove(random, -1);
            }
        });
        it("should be random", () => {
            
            let lastResult = 0;
            let equalCount = 0;
            for (let i = 0; i < maxIterations; i++) {
                const random = Random.randomFloat(max, min);
                if (random === lastResult){
                    equalCount++;
                }
                lastResult = random;
            }
            assert.isBelow(equalCount, maxEqual);
        });
    });
    describe("randomString", () => {
        const length = 10;
        it("should be the right length", () => {
            for (let i = 0; i < 20; i++) {
                const str = Random.randomString(length);
                assert.equal(str.length, length);
            }
        });
        it("should be random", () => {
            let lastResult = "";
            let equalCount = 0;
            for (let i = 0; i < maxIterations; i++) {
                const str = Random.randomString(length);
                if (str === lastResult){
                    equalCount++;
                }
                lastResult = str;
            }
            assert.isBelow(equalCount, maxEqual);
        });
    });
    describe("choice", () => {
        it("empty array should get undefined", () => {
            assert.isUndefined(Random.choice([]));
        });

        const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        it("should be random", () => {
            let lastResult = 0;
            let equalCount = 0;
            for (let i = 0; i < maxIterations; i++) {
                const random = <number>Random.choice(array);
                if (random === lastResult){
                    equalCount++;
                }
                lastResult = random;
            }
            assert.isBelow(equalCount, maxEqual);
        });
    });
});