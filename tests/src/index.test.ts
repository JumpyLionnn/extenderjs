import "mocha";
import * as assert from "assert";

import { helloWorld }from "extenderjs";

describe("index.ts", () => {
    describe("hello world", () => {
        it("should return hello world!", () => {
            assert.equal(helloWorld(), "hello World!");
        });
    });
});