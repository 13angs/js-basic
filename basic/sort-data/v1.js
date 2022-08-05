const numbers = [2, 6, 1, 7, 10, 9, 3, 8, 5, 4]
const number = [2, 6, 1, 7, 10, 9, 3, 8, 5, 4]
numbers.sort((a,b) => a-b)
number.sort((a,b) => b-a)

console.log(numbers, number);
