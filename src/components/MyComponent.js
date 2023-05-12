//class component
//function component
//merge state only occurs with react => class

import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
  //JSX ...
  render() {
    const myAge = 50;
    return (
      <div>
        {/* My name is {this.state.name} and I'm from {this.state.address} */}

        <UserInfor />
        <br />
        <br />
        <DisplayInfor name="Green pear" age="30" />
        <hr />
        <DisplayInfor name="Chiquita" age={myAge} />
      </div>
    );
  }
}

export default MyComponent;
