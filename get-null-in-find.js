const numbers = [25, 63, 12, 2, 11, 44];
const firstEven = numbers.find(n => n % 2 === 0);
// console.log(firstEven);

const greaterThan100 = numbers.find(n => n > 100);
console.log(greaterThan100);