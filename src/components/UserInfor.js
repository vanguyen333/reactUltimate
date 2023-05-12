import React from "react";

class UserInfor extends React.Component {
  state = {
    name: "Van",
    address: "Green Pear",
    age: 13,
  };

  handleOnChangeInput = (event) => {
    //bad code
    //this.state.age = event.target.value
    this.setState({
      name: event.target.value,
    });
  };

  handleOnChangeAge = (event) => {
    this.setState({
      age: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault(); //stop reloading page after pressing ok button from alert me
    console.log(this.state);
  };
  render() {
    return (
      <div>
        My name is {this.state.name} and my age is {this.state.age}
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <label>Your name: </label>
          <input
            value={this.state.name} //set original value
            type="text"
            onChange={(event) => this.handleOnChangeInput(event)}
          />
          <label>Your age: </label>
          <input
            value={this.state.age} //set original value
            type="text"
            onChange={(event) => this.handleOnChangeAge(event)}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default UserInfor;
