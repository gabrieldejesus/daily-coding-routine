import { it, describe } from "node:test";
import assert from "node:assert";

import { stringToNumber } from "../index.js";

describe("String to number", () => {
  it("should convert a string to a number", () => {
    assert.strictEqual(stringToNumber("1234"), 1234);
    assert.strictEqual(stringToNumber("605"), 605);
    assert.strictEqual(stringToNumber("1405"), 1405);
    assert.strictEqual(stringToNumber("-7"), -7);
  });
});