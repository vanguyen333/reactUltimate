bai 8 Chapter 1: Destructuring object, Array
Destructuring: destroy the structure of sth, makes it easy to extract only what is needed
const person = { name: ‘Eric’, age: 26, eyeColor: ‘black’, like: ‘girl’ };
const { age, name } = person;
console.log(name); //Eric
console.log(age); //26

Notice that the object properties do not have to be declared in a specific order.
