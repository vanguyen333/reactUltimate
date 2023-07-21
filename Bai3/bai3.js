//ES6 classes( can only be used from version 6 of javascript)

class Person {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }
  getAddress() {
    return "I live in " + this.address;
  }
}
const test = new Person("Hoi Dan IT", "Ha Noi");
console.log(">>>Check test: ", test);
console.log(">>>Check test: ", test.getAddress());
