Toan tu dieu kien: Ternary Operator, conditional operator like if/else
Syntax: condition ? <expression if true> : <expression if false>
Before:
if (authenticated) {
renderApp();
} else {
renderLogin();
}
After:
authenticated ? renderApp() : renderLogin();
