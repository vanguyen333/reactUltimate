import React from "react";
import "./DisplayInfor.scss";
import logo from "./../logo.svg";
class DisplayInfor extends React.Component {
  //prepare data
  constructor(props) {
    console.log("call constructor: 1");
    super(props); // child get all props from dad
    //babel compiler
    this.state = {
      isShowListUser: true,
    };
  }
  componentDidMount() {
    console.log(">>>call me did mount");
    setTimeout(() => {
      document.title = "Van nguyen the coder";
    }, 3000);
  }
  componentDidUpdate() {
    console.log(">>>call me did update");
  }
  handleShowHide = (prevProps, prevState, snapshot) => {
    this.setState({
      isShowListUser: !this.state.isShowListUser,
    });
  };

  render() {
    console.log(">>>Call me render");
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
          <>
            {listUsers.map((user, index) => {
              console.log(">>check map user:", user);
              return (
                //   {/* the +m sign is to transform age of 18 string to number */}
                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                  <div>My name is {user.name} </div>
                  <div>My age is {user.age}</div>
                  <div>
                    <button
                      onClick={() => this.props.handleDeleteUser(user.id)}
                    >
                      Delete
                    </button>
                  </div>
                  <hr />
                </div>
              );
            })}
            <hr />
          </>
        )}
      </div>
    );
  }
}
export default DisplayInfor;
