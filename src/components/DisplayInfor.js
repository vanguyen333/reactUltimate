import React from "react";
import "./DisplayInfor.scss";
import logo from "./../logo.svg";
class DisplayInfor extends React.Component {
  state = {
    isShowListUser: true,
  };
  handleShowHide = () => {
    this.setState({
      isShowListUser: !this.state.isShowListUser,
    });
  };
  render() {
    // console.log(this.props);
    //Destructuring array/object
    const { listUsers } = this.props; //object
    console.log(listUsers);
    // console.table(listUsers);
    // === const listUsers = this.props.listUsers;
    //prop = >properties thuoc tinh, truyen du lieu from dad to kids
    return (
      <div className="display-infor-container">
        <img src={logo} alt="" />
        <div>
          <span
            onClick={() => {
              this.handleShowHide();
            }}
          >
            {this.state.isShowListUser === true
              ? "Hide user list"
              : "Show user list:"}
          </span>
        </div>
        {this.state.isShowListUser && (
          <div>
            {listUsers.map((user) => {
              console.log(">>check map user:", user);
              return (
                //   {/* the +m sign is to transform age of 18 string to number */}
                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                  <div>My name is {user.name} </div>
                  <div>My age is {user.age}</div>
                  <hr />
                </div>
              );
            })}
            <hr />
          </div>
        )}
      </div>
    );
  }
}
export default DisplayInfor;
