import { it, describe } from "node:test";
import assert from "node:assert";

import { isPrime } from "../index.js";

describe("Large numbers", () => {
  it("Test with positive large numbers", () => {
    assert.strictEqual(isPrime(500000000), false, "500000000 is not prime");
    assert.strictEqual(isPrime(1583816483), true, "1583816483 is prime");
  });

  it("Test with negative large numbers", () => {
    assert.strictEqual(isPrime(-500000000), false, "-500000000 is not prime");
    assert.strictEqual(isPrime(-1583816483), false, "-1583816483 is not prime");
  });
});
