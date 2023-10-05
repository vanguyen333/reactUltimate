import React from "react";
class UserInfor extends React.Component {
  state = {
    name: "Van",
    address: "Earth",
    age: 3,
  };

  handleOnChangeInput = (event) => {
    //bad code
    //this.state.age = event.target.value
    this.setState({
      name: event.target.value,
    });
    // console.log(event, event.target.value);
  };
  handleOnChangeAge = (event) => {
    this.setState({
      age: event.target.value,
    });
    // console.log(event, event.target.value);
  };
  handleOnSubmit = (event) => {
    event.preventDefault(); //prevent refresh page after pressing submmit
    console.log(this.state);
  };
  render() {
    return (
      <div>
        My name is {this.state.name} and I'm {this.state.age}
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <label>Your name: </label>
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => this.handleOnChangeInput(event)}
          />

          <label>Your age: </label>
          <input
            value={this.state.age}
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
