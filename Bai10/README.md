Optional Chaining "?"
Toan tu hoi cham
The optional chaining ?. is a safe way to access nested object properties, even if an
intermediate property doesn’t exist.
(Toán tử ?. là một cách an toàn để truy cập thuộc tính của một object có nhiều lớp, kể cả
khi thuộc tính đấy không tồn tại)
let user = {}; // a user without "address" property
alert(user.address.street); // Error!
How to fix it ?
let user = {};
alert(user.address ? user.address.street : undefined);
let user = {}; // user has no address
alert( user.address && user.address.street ); // undefined (no error)

Structure:
Value?.prop || undefined

alert( user?.address ); // undefined
alert( user?.address?.street ); // undefined
user?.address?.street ?? defaultValue => remove undefined

let userAdmin = {
admin() {
alert("I am Eric");
}
};

check function
object.func?.()
let userGuest = { };
userAdmin.admin?.( ) ; // I am Eric
userGuest.admin?.( ); // nothing happens (no such method) => check function admin()
có tồn tại hay không.

Được dùng để truy cập thuộc tính, thông qua [ ]
let key = "firstName";
let user1 = {
firstName: "Hoi Dan IT"
};
let user2 = null;
alert( user1?.[key] ); // Hoi Dan IT
alert( user2?.[key] ); // undefined
