/* eslint-disable no-lone-blocks */
import React from "react";
import "./DisplayInfor.scss";
import logo from "./../logo.svg";

class DisplayInfor extends React.Component {
  constructor(props) {
    console.log(">>>Call constructor: 1");
    super(props);
    this.state = {
      isShowListUser: true,
    };
  }

  componentDidMount() {
    console.log(">>>call me component did mount");
    setTimeout(() => {
      document.title = "Van & Green Pear";
    }, 3000);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(">>>call me componentDidUpdate", this.props, prevProps);
    if (this.props.listUsers !== prevProps.listUsers) {
      alert("You got 5 users");
    }
  }

  handleShowHide = () => {
    this.setState({
      isShowListUser: !this.state.isShowListUser, //! is like a toggle, on and off
    });
  };
  render() {
    console.log("Call me render");
    //destructuring array/object

    const { listUsers } = this.props; //object
    // console.table(listUsers); //print users as table
    //   console.log(listUsers);
    // console.table(listUsers);
    return (
      <div className="display-infor-container">
        {/* <img src={logo} /> */}
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
          <>
            {listUsers.map((user, index) => {
              {
                /* console.log(">>>Check map user:", user); */
              }
              //the plus + sign will convert string to number
              {
                return (
                  <div>
                    <div
                      key={user.id}
                      className={+user.age > 18 ? "green" : "red"}
                    >
                      <div>My name's {user.name}</div>
                      <div>My age's {user.age} </div>
                    </div>
                    <di>
                      <button
                        onClick={() => this.props.handleDeleteUser(user.id)}
                      >
                        Delete
                      </button>
                    </di>
                    <hr />
                  </div>
                );
              }
            })}
          </>
        )}
      </div>
    );
  }
}

export default DisplayInfor;
