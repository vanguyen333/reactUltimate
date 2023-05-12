//class component
//function component
//merge state only occurs with react => class

import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "Van",
    address: "Green Pear",
    age: 0,
  };

  handleClick = (event) => {
    console.log(">>Click me my button");
    // console.log(`My name is`, this.state.name);
    console.log(`My age is`, this.state.age);

    //console.log("random number: ", Math.floor(Math.random() * 100 + 1));
    this.setState({
      name: "green pear",
      age: Math.floor(Math.random() * 100 + 1),
    });

    // this.setState({
    //   age: Math.floor(Math.random() * 100 + 1),
    // });
    // console.log(event);
  };

  handleOnMouseOver(event) {
    // console.log(event.pageX);
  }
  handleOnChangeInput = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  //JSX ...
  render() {
    return (
      <div>
        {/* My name is {this.state.name} and I'm from {this.state.address} */}
        My name is {this.state.name} and my age is {this.state.age}
        <form>
          <input
            type="text"
            onChange={(event) => this.handleOnChangeInput(event)}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default MyComponent;
