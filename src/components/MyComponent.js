//class component
//function component
//merge state only occurs with react => class

import React from "react";
import UserInfor from "./UserInfor";

class MyComponent extends React.Component {
  //JSX ...
  render() {
    return (
      <div>
        {/* My name is {this.state.name} and I'm from {this.state.address} */}

        <UserInfor></UserInfor>
      </div>
    );
  }
}

export default MyComponent;
