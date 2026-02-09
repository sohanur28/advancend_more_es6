const numbers = [1, 5, 6, 10, 45, 2, 7];

// let sum = 0;
// for(const num of numbers){
//     sum = sum + num
// }

const total = numbers.reduce((acc, curr) => acc + curr)

console.log(total)
