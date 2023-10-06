import React from "react";
class DisplayInfor extends React.Component {
  render() {
    // console.log(this.props);
    //Destructuring array/object
    const { listUsers } = this.props; //object
    console.log(listUsers);
    // === const listUsers = this.props.listUsers;
    //prop = >properties thuoc tinh, truyen du lieu from dad to kids
    return (
      <div>
        {listUsers.map((user) => {
          return (
            <div key={user.id}>
              <div>My name is {user.name} </div>
              <div>My age is {user.age}</div>
              <hr />
            </div>
          );
        })}
        {/* <div>My name is {name}</div>
        <div>My age is {age}</div>
        <hr />
        <div>My name is {name}</div>
        <div>My age is {age}</div>
        <hr />
        <div>My name is {name}</div>
        <div>My age is {age}</div> */}
        <hr />
      </div>
    );
  }
}
export default DisplayInfor;
