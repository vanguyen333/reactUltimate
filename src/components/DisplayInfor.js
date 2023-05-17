/* eslint-disable no-lone-blocks */
import React from "react";

class DisplayInfor extends React.Component {
  state = {
    isShowListUser: true,
  };
  handleShowHide = () => {
    this.setState({
      isShowListUser: !this.state.isShowListUser, //! is like a toggle, on and off
    });
  };
  render() {
    //destructuring array/object

    const { listUsers } = this.props; //object
    // console.table(listUsers); //print users as table
    //   console.log(listUsers);
    // console.table(listUsers);
    return (
      <div>
        <div>
          <span
            onClick={() => {
              this.handleShowHide();
            }}
          >
            {this.state.isShowListUser === true
              ? "Hide list users:"
              : "Show list users:"}
          </span>
        </div>
        {/* if false, will hide users */}
        {this.state.isShowListUser && (
          <div>
            {listUsers.map((user, index) => {
              console.log(">>>Check map user:", user);
              //the plus + sign will convert string to number
              {
                return (
                  <div>
                    <div
                      key={user.id}
                      className={+user.age > 18 ? "green" : "red"}
                    >
                      <div style={{ color: "blue" }}>My name's {user.name}</div>
                      <div>My age's {user.age} </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        )}
      </div>
    );
  }
}

export default DisplayInfor;
