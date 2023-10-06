import React from "react";
class DisplayInfor extends React.Component {
  render() {
    // console.log(this.props);
    //Destructuring array/object
    const { listUsers } = this.props; //object
    console.log(listUsers);
    // console.table(listUsers);
    // === const listUsers = this.props.listUsers;
    //prop = >properties thuoc tinh, truyen du lieu from dad to kids
    return (
      <div>
        {listUsers.map((user) => {
          console.log(">>check map user:", user);
          if (+user.age > 18) {
            return (
              <div key={user.id} className="green">
                <div>My name is {user.name} </div>
                <div>My age is {user.age}</div>
                <hr />
              </div>
            );
          } else {
            return (
              <div key={user.id} className="red">
                <div>My name is {user.name} </div>
                <div>My age is {user.age}</div>
                <hr />
              </div>
            );
          }
        })}
        <hr />
      </div>
    );
  }
}
export default DisplayInfor;
