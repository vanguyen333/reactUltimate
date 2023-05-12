//class component
//function component

import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "Van",
    address: "Green Pear",
    age: 0,
  };

  handleClick = (event) => {
    console.log(">>Click me my button");
    console.log(`My name is`, this.state.name);
    // console.log(event);
  };

  handleOnMouseOver(event) {
    console.log(event.pageX);
  }
  //JSX
  render() {
    return (
      <div>
        My name is {this.state.name} and I'm from {this.state.address}
        <button onMouseOver={this.handleOnMouseOver}>Hover me</button>
        <button
          onClick={(event) => {
            this.handleClick(event);
          }}
        >
          Click me
        </button>
      </div>
    );
  }
}

export default MyComponent;
