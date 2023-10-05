//Speard Operator , js three dots, toan tu mo rong
// The JavaScript spread operator (...) allows us to quickly copy all or part of an existing
// array or object into another array or object.
// Toán tử 3 dấu chấm cho phép chúng ta copy tất cả (hoặc một phần) của một
// array/object sang một array/object khác

const firstArr = [1, 2, 3];
const secondArr = [4, 5, 6];
const thirdArr = [...firstArr, ...secondArr];
const forthArr = [...secondArr, ...firstArr];
// console.log(thirdArr);
// console.log(forthArr);

let myArr = ["na", "xoai", "le"];
// myArr.push("new item");
myArr = [...myArr, "new item"];
// console.log(myArr);

//spread operator with object

const test = {
  name: "naly",
  address: "vanguyendev",
};
// console.log({ ...test });

const myvehicle = {
  brand: "Ford",
  model: "mustang",
  color: "red",
};
const moreInfo = {
  type: "car",
  year: 2021,
  color: "yellow",
};
const update = { ...myvehicle, ...moreInfo };
console.log(update); //{brand: 'Ford', model: 'mustang', color: 'yellow', type: 'car', year: 2021}

const state = {
  name: "cam",
  age: 26, //22
  address: "earth",
};
const result = { ...state, age: 22 };
console.log(result); //{name: 'cam', age: 22, address: 'earth'}

//exercise
function sum(x, y, z) {
  return x + y + z;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers)); //6
// expected output: 6
