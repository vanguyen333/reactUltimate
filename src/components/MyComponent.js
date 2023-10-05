//class component
//function component
import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
  render() {
    const myInfor = ["ab", "c", "c"];
    return (
      <div>
        <UserInfor />
        <br /> <br />
        <DisplayInfor name="askVanNguyen" age={26} myInfor={myInfor} />
        <hr />
        <DisplayInfor name="nali" age="30" address="land" />
      </div>
    );
  }
}
export default MyComponent;
