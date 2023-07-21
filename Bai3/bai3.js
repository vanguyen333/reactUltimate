//object properties: thuoc tinh  include thuoctinh_name:value
let person = { name: "Vanni", age: "32", eye: "brown" };

console.log(">>Check vvar: ", person);
//access object properties

console.log(">>Check name: ", person.name); //cach 1
console.log(">>Check name: ", person["name"]); //cach 2

//arrays are a special type of object
const nguoi = ["Oanh", "Nguyen", 32];
console.log(">>Check name: ", nguoi[0]);
