import React from "react";
class DisplayInfor extends React.Component {
  render() {
    // console.log(this.props);
    //Destructuring array/object
    const { age, name } = this.props; //object
    //prop = >properties thuoc tinh, truyen du lieu from dad to kids
    return (
      <div>
        <div>My name is {name}</div>
        <div>My age is {age}</div>
        <div>My address is {this.props.address}</div>
        <div>My infor is {this.props.myInfor}</div>
      </div>
    );
  }
}
export default DisplayInfor;
