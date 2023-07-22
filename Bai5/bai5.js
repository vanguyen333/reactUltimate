//Array methods, map and filter
//map() creates a new array from calling a function for every array element
//map() calls a function once for each element in an array
//map() does not execute the function for empty elements
//map() does not change teh original array.
//syntax: array.map(function(currentValue,index,arr),thisValue)
const myArray = ["apple", "banana", "orange"];
const myList = myArray.map((item) => `<p>${item}</p>`);
// console.log(myList, myArray);

const myArray1 = [1, 2, 3];
const myList1 = myArray1.map((item) => item * 2);
// console.log(myList1, myArray1);

const myArray2 = [1, 2, 3];
//inside map is a function, const a = () =>{}
const myList2 = myArray2.map((item, index) => {
  console.log(item, index);
  return item * 2;
});
// console.log(myList2, myArray2);

//filter: loc ra item from the array, not change the original array,
//filter() not execute the function for empty elements
const ages = [32, 33, 16, 40];
//bad code
// const result = ages.filter(checkAdult);
// function checkAdult(age) {
//   return age >= 18;
// }
//good code
const result = ages.filter((item) => {
  console.log(item); //tra ra 32,33,16,40
  return item >= 18; //tra ra 32,33,40
});
console.log(result);
