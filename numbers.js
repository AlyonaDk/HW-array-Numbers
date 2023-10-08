const numbers = []
numbers.push(1)
numbers.push(2)
numbers.push(3)
numbers.pop()

console.log(numbers);

const newNumbers = [0, ...numbers]

console.log(newNumbers);

const random = Math.floor(Math.random() * (999 - 99 + 1)) + 99

newNumbers.unshift(random)

console.log(newNumbers);