import { it, describe } from "node:test";
import assert from "node:assert";

import { isPrime } from "../index.js";

describe("Test not prime", () => {
  it("should return false for every number that is not", () => {
    assert.strictEqual(isPrime(4), false, "4 is not prime");
    assert.strictEqual(isPrime(6), false, "6 is not prime");
    assert.strictEqual(isPrime(8), false, "8 is not prime");
    assert.strictEqual(isPrime(9), false, "9 is not prime");
    assert.strictEqual(isPrime(45), false, "45 is not prime");
    assert.strictEqual(isPrime(-5), false, "-5 is not prime");
    assert.strictEqual(isPrime(-8), false, "-8 is not prime");
    assert.strictEqual(isPrime(-41), false, "-41 is not prime");
  });
});
