//class component
//function component
import React from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: "Hoi Dan IT", age: 16 },
      { id: 2, name: "Eric", age: 26 },
      { id: 3, name: "HaryPhamDev", age: 69 },
    ],
  };
  handleAddNewUser = (userObj) => {
    //bad code
    // let listUsersNew = this.state.listUsers;
    // listUsersNew.unshift(userObj);
    // this.setState({
    //   listUsers: listUsersNew,
    // });
    //another way

    this.setState({
      listUsers: [userObj, ...this.state.listUsers],
    });
  };
  render() {
    return (
      //Dry: dont repead yourself
      <>
        <div>
          <AddUserInfor handleAddNewUser={this.handleAddNewUser} />
          <br /> <br />
          <DisplayInfor listUsers={this.state.listUsers} />
        </div>
      </>
    );
  }
}
export default MyComponent;
