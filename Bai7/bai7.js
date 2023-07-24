//Spread operator: Toan tu 3 dau cham,
//toan tu mo rong: js three dots, spread syntax

const firstArr = [1, 2, 3];
const secondArray = [4, 5, 6];

const thirdArr = [...firstArr, ...secondArray];
console.log(thirdArr); //[1,2,3,4,5,6]

let myArr = ["van", "is excellent", "at coding"];
myArr = [...myArr, " and communicating"];
console.log(myArr);

//spread operator with object

const test = { name: "van", address: "vanguyendev" };
// console.log(test);
console.log({ ...test });

const myVehicle = {
  brand: "Ford",
  model: "Mustang",
  color: "red",
};
const updateMyVehicle = {
  type: "car",
  year: 2021,
  color: "yellow",
};
//thuoc tinh tay phai updateMyVehicle se de len thuoc tinh tay trai myVehicle
const update = { ...myVehicle, ...updateMyVehicle };
console.log(update);

const state = {
  name: "van",
  age: "00",
  address: "abc",
};
const result = { ...state, age: 30 };
console.log(result);

//bai tap
const arrayOne = ["a", "b", "c"];
const arrayTwo = [1, 2, 3];
console.log(...arrayOne, ...arrayTwo);

function sum(x, y, z) {
  return x + y + z;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers));
