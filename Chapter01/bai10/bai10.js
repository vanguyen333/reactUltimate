// #10 Optional chaining (?.)
// 1.Optional chaining '?.'
// The optional chaining ?. is a safe way to access nested object properties, even if an
// intermediate property doesn’t exist.
// (Toán tử ?. là một cách an toàn để truy cập thuộc tính của một object có nhiều lớp, kể cả
// khi thuộc tính đấy không tồn tại)
// let user = {}; // a user without "address" property
// alert(user.address.street); // Error!
// How to fix it ?
// let user = {};
// alert(user.address ? user.address.street : undefined);
// let user = {}; // user has no address
// alert( user.address && user.address.street ); // undefined (no error)
// Cú pháp:
// Value?.prop || undefined

let user = {};
// alert(user.address.street); //error
//  alert(user.address ? user.address.street : undefined);
// alert(user?.address?.street); //undefined
// alert(user?.address?.street ?? "not found user");

// 2.Other variants: ?.( ), ?.[ ]
// ?.( ) is used to call a function that may not exist.
// Được dùng để truy cập một function - thứ có thể không tồn tại
let userAdmin = {
  admin() {
    alert("I am Eric");
  },
};
let userGuest = {};
// userAdmin.admin();
userGuest.admin?.();

//Review
//with Object
//obj?.a?.b?.c //=>undefined

//obj?.a?.b?.c ?? 'not found' //=> not found if a,b,c not exist

//with functions
//obj.func?.()
let obj = {
  name: "nali",
  channel: "devfree",
  address: {
    street: "abc",
    province: "ON",
  },
};
console.log(obj?.address?.xyz?.def);

const test = undefined;
test?.map?.((item) => item);
