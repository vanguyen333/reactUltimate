const myArray = ["apple", "banana", "orange"];
const myList = myArray.map((item) => ` <p>${item}</p>`);
const newArr = myArray.map((item) => {
  item;
});

// console.log(myList, myArray);
// console.log(newArr);
//
const num = [1, 2, 3];
const newNum = num.map((item) => item * 2);
// console.log(newNum);

//
const arr = [1, 2, 3];
const array = arr.map((item, index) => {
  //   console.log(item, index);
  return item * 2;
});
// console.log(array);

const newarray = [];
for (let i = 0; i < arr.length; i++) {
  let item = arr[i] * 2;
  newarray.push(item);
}
// console.log(newarray);

//filter
const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);
function checkAdult(age) {
  return age >= 18;
}
const result1 = ages.filter((age) => {
  console.log(age);
  return age >= 18;
});
console.log(result1);
