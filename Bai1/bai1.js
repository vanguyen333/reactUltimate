//constant CANNOT be redeclared or reassigned
//but we CAN change a constant object(array) in javaScript
var name = "Hoi Dan IT";
var age = 26;
const x = {};
x.name = "Hoi Dan IT";

console.log(">>>Check x", x);
