//class component
//function component
//merge state only occurs with react => class

import React from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: "Green Pear", age: "13" },
      { id: 2, name: "Van", age: "26" },
      { id: 3, name: "Ngoc", age: "69" },
    ],
  };
  //JSX ...
  render() {
    //Dry : dont repeat yourself
    return (
      <div>
        {/* My name is {this.state.name} and I'm from {this.state.address} */}

        <AddUserInfor />
        <br />
        <br />
        <DisplayInfor
          listUsers={this.state.listUsers}
          users={this.state.listUsers}
        />
        <hr />
      </div>
    );
  }
}

export default MyComponent;
