import { it, describe } from "node:test";
import assert from "node:assert";

import { numberToString } from "../index.js";

describe("Number to string", () => {
  it("should convert a number to a string", () => {
    assert.strictEqual(numberToString(67), "67");
    assert.strictEqual(numberToString(79585), "79585");
    assert.strictEqual(numberToString(1), "1");
    assert.strictEqual(numberToString(0), "0");
    assert.strictEqual(numberToString(-67), "-67");
    assert.strictEqual(numberToString(-67), "-67");
  })
})