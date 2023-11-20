import { it, describe } from "node:test";
import assert from "node:assert";

import { isPrime } from "../index.js";

describe("Basic", () => {
  it("basic tests", () => {
    assert.strictEqual(isPrime(0), false, "0 is not prime");
    assert.strictEqual(isPrime(1), false, "1 is not prime");
    assert.strictEqual(isPrime(2), true, "2 is prime");
    assert.strictEqual(isPrime(73), true, "73 is prime");
    assert.strictEqual(isPrime(75), false, "75 is not prime");
    assert.strictEqual(isPrime(-1), false, "-1 is not prime");
  });
});
