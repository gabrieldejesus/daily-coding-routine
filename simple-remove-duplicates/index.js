export function counter(number, arr) {
  let counter = { index: 0, number: 0 };

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === number) {
      counter.index = i;
      counter.number = arr[i];
    }
  }

  return counter;
}

export function solve(arr) {
  const elements = [];

  for (let i = 0; i < arr.length; i++) {
    let currentNumber = counter(arr[i], arr);
    let validateNumber = elements.find(
      (el) => el.number === currentNumber.number
    );
    if (!validateNumber) elements.push(currentNumber);
  }

  const sortedNumbers = elements.sort((i1, i2) =>
    i1.index > i2.index ? 1 : i1.index < i2.index ? -1 : 0
  );

  const formattedNumbers = sortedNumbers.map((el) => el.number);

  return formattedNumbers;
}
