//Template Literals/ Template strings / backticks
const s1 = "hello world";
const s2 = `hello world!`;
console.log(s1, "", s2);

const base_url = "localhost:8080";
const api = "get-user";
fet_page = 2;
const result = `${base_url}/${api}?page=${2}`;
console.log(result); //localhost:8080/get-user?page=2
