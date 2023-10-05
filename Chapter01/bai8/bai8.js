// 8 Destructuring assignment - Giản lược hóa cấu trúc Object/Array
// 1.Destructuring
// To illustrate destructuring, we"ll make a sandwich. Do you take everything out of the
// refrigerator to make your sandwich? No, you only take out the items you would like to
// use on your sandwich.

// The old way:
// const person = { name: "Eric", age: 26, eyeColor: "black", like: "girl" };
// const name = person.name;
// const age = person.age;
// console.log(name); //Eric
// console.log(age); //26
// With destructuring:
const person = { name: "Eric", age: 26, eyeColor: "black", like: "girl" };
const { age, name } = person;
// console.log(name); //Eric
// console.log(age); //26

const city = ["ha noi", "da nang", "sai gon", "ca mau"];
const [hanoi, danang, , camau] = city;
console.log(hanoi, danang, camau);
//exercise
const react = ["facebook", "all-in-one", "javascript"];
const [, , javascript] = react;
let tech = javascript;
console.log(tech);

//bai2
const dev = { salary: 2000, tool: "laptop", like: "bugs" };
const { like } = dev;
console.log(like); //bugs
