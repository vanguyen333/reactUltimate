// //Ternary Operator
// The ternary operator is a simplified conditional operator like if / else.
// Syntax: condition ? <expression if true> : <expression if false>
// Here is an example using if / else:
// Before:
// if (authenticated) {
// renderApp();
// } else {
// renderLogin();
// }
// After:
// authenticated ? renderApp() : renderLogin();

const x = 10;
let y = "";
if (x > 5) {
  console.log(`greater than 5`);
} else {
  console.log("less than 5");
}

y = x > 5 ? console.log("greater than 5") : console.log("less than 5");
