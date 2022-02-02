import "mocha";
import { assert } from "chai";

import { range } from "extenderjs";

describe("range", () => {
    it("start is stop", () => {
        const rangedArray = Array.from(range(10));
        assert.deepEqual(rangedArray, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    it("start and stop", () => {
        const rangedArray = Array.from(range(1, 10));
        assert.deepEqual(rangedArray, [1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    it("start, stop and step", () => {
        const rangedArray = Array.from(range(1, 50, 5));
        assert.deepEqual(rangedArray, [1, 6, 11, 16, 21, 26, 31, 36, 41, 46]);
    });
});