import { it, describe } from "node:test";
import assert from "node:assert";

import { isPrime } from "../index.js";

describe("Test prime", () => {
  it("should return true for every number that is", () => {
    assert.strictEqual(isPrime(3), true, "3 is prime");
    assert.strictEqual(isPrime(5), true, "5 is prime");
    assert.strictEqual(isPrime(7), true, "7 is prime");
    assert.strictEqual(isPrime(41), true, "41 is prime");
    assert.strictEqual(isPrime(5099), true, "5099 is prime");
  });
});
