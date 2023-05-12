//class component
//function component

import React from "react";

class MyComponent extends React.Component {
  //JSX
  state = {
    name: "Van",
    address: "Green Pear",
    age: 0,
  };
  render() {
    return (
      <div>
        My name is {this.state.name} and I'm from {this.state.address}
        <button>Click me</button>
      </div>
    );
  }
}

export default MyComponent;
