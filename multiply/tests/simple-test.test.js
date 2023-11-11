import { it, describe } from "node:test";
import assert from "node:assert";

import { multiply } from "../index.js";

describe("Multiply", () => {
  it("should multiply two numbers", () => {
    assert.strictEqual(multiply(1, 1), 1);
    assert.strictEqual(multiply(2, 1), 2);
    assert.strictEqual(multiply(2, 2), 4);
    assert.strictEqual(multiply(3, 5), 15);
    assert.strictEqual(multiply(3, 10), 30);
  });
});
