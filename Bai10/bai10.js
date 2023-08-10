//Optional Chaining "?"
let user = {};
// console.log(user.address.street); //error, undefined

//how to fix
console.log(user?.address?.street); //undefined
console.log(user?.address?.street ?? "not find user"); //not find user

let userAdmin = {
  admin() {
    alert("I am Eric");
  },
};
let userGuest = {};
userAdmin.admin?.(); // I am Eric
userGuest.admin?.(); // nothing happens (no such method) => check function admin() có tồn tại hay không.

let obj = {
  name: "van",
  channel: "vandev official",
  address: {
    street: "abc",
    province: "Ontario",
  },
};
console.log(obj?.address?.xyz?.def);

const test = undefined;
// test.map((item) => item); //error
test?.map?.((item) => item); // No error
