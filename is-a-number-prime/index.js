export function isPrime(num) {
  let numbers = [];

  // Create a numbers array with the data num received
  for (let i = 0; i <= num; i++) {
    numbers.push(i);
  }

  // First mark all odd number's prime
  for (let i = 3; i <= num; i += 2) {
    numbers[i] = 1;
  }

  // Special case
  numbers[2] = 1;
  numbers[1] = 0;
  numbers[0] = 0;

  // The sieve of eratosthenes
  for (let i = 3; i <= num; i += 2) {
    // if the current number is not marked (it's prime)
    if (numbers[i] == 1) {
      // mark all the multiples of i as not prime
      for (let j = i * i; j <= num; j = j + i) {
        numbers[j] = 0;
      }
    }
  }

  if (numbers[num] == 1) {
    return true;
  } else {
    return false;
  }
}
