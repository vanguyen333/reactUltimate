//The old way:
// const person = { name: 'Eric', age: 26, eyeColor: 'black', like: 'girl' };
// const name = person.name;
// const age = person.age;
// console.log(name); //Eric
// console.log(age); //26
//With destructuring:
const person = { name: "Eric", age: 26, eyeColor: "black", like: "girl" };
const { age, name } = person;
console.log(name); //Eric
console.log(age); //26

//Destrunturing Array
const city = ["ha noi", "da nang", "sai gon", "ca mau"];
const [hanoi, danang, hcm] = city;
const [x, y, , z] = city; //x=hanoi, y=danang, z = camau

console.log(hanoi, danang, hcm); //hanoi, danang, sai gon
console.log(x, y, z); //hanoi, danang, caumau

//bai tap
const react = ["facebook", "all-in-one", "javascript"];
let [, , javascript] = react;
const tech = javascript;

console.log(tech);

//complete this block code to print 'bugs’
const dev = { salary: 2000, tool: "laptop", like: "bugs" };
const { like } = dev;
console.log(like); //bugs
