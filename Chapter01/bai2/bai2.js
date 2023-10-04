class Person {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }
  getAddress() {
    return "I live in " + this.address;
  }
}
const test = new Person("van", "1000 Ave, abc, earth");
console.log("check test>>>", test);
console.log("check test>>>", test.getAddress());

//exercise
class Novel {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
  getAuthor() {
    console.log("Author is" + this.author());
  }
}
let myNovel = new Novel("Think and Grow Rich", "Napoleon Hill");
console.log(myNovel);
