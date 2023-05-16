import React from "react";

class DisplayInfor extends React.Component {
  render() {
    //destructuring array/object

    const { listUsers } = this.props; //object
    // console.table(listUsers); //print users as table
    //   console.log(listUsers);
    return (
      <div>
        {listUsers.map((user, index) => {
          console.log(">>>Check map user:", user);
          //the plus + sign will convert string to number
          if (+user.age > 18) {
            return (
              <div key={user.id} className="green">
                <div>My name's {user.name}</div>
                <div>My age's {user.age} </div>
              </div>
            );
          } else {
            return (
              <div key={user.id} className="red">
                <div>My name's {user.name}</div>
                <div>My age's {user.age} </div>
              </div>
            );
          }
        })}
        {/* <div>My name's {name}</div>
        <div>My age's {age}</div>
        <hr />
        <div>My name's {name}</div>
        <div>My age's {age}</div>
        <hr />
        <div>My name's {name}</div>
        <div>My age's {age}</div> */}
      </div>
    );
  }
}

export default DisplayInfor;
