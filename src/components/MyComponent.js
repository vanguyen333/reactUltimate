//class component
//function component
//merge state only occurs with react => class

import React, { useState } from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

const MyComponent = (props) => {
  const [listUsers, setListUsers] = useState([
    { id: 1, name: "Green Pear", age: "13" },
    { id: 2, name: "Van", age: "26" },
    { id: 3, name: "Ngoc", age: "69" },
  ]);

  const handleAddNewUser = (userObj) => {
    setListUsers([userObj, ...listUsers]);
  };

  const handleDeleteUser = (userId) => {
    let listUsersClone = listUsers;
    listUsersClone = listUsersClone.filter((item) => item.id !== userId);
    setListUsers(listUsersClone);
  };
  return (
    <>
      <br />
      <div className="a">
        <AddUserInfor handleAddNewUser={handleAddNewUser} />
        <br />
        <br />
        <DisplayInfor
          listUsers={listUsers}
          handleDeleteUser={handleDeleteUser}
        />
        <hr />
      </div>
      <div className="b"></div>
    </>
  );
};

//class MyComponent extends React.Component {
//   state = {
//     listUsers: [
//       { id: 1, name: "Green Pear", age: "13" },
//       { id: 2, name: "Van", age: "26" },
//       { id: 3, name: "Ngoc", age: "69" },
//     ],
//   };

//   handleAddNewUser = (userObj) => {
//     // let listUsersNew = this.state.listUsers;
//     // listUsersNew.unshift(userObj);
//     // console.log("check:", listUsersNew);
//     // this.setState({
//     //   listUsers: listUsersNew,
//     // });

//     // this.setState({
//     //   listUsers: [userObj, ...this.state.listUsers],
//     // });
//     this.setState({
//       listUsers: [userObj, ...this.state.listUsers],
//     });
//   };

//   handleDeleteUser = (userId) => {
//     let listUsersClone = [...this.state.listUsers];
//     listUsersClone = listUsersClone.filter((item) => item.id !== userId);
//     this.setState({
//       listUsers: listUsersClone,
//     });
//   };
//   //JSX ...
//   render() {
//     //Dry : dont repeat yourself
//     // const test = { name: " Green Pear ", age: 45 };
//     return (
//       <>
//         {/* {test.name}
//         {test.age} */}
//         {/* {console.log("Check test: ", test)} */}
//         {/* {JSON.stringify(test)} */}
//         <br />
//         <div className="a">
//           {/* My name is {this.state.name} and I'm from {this.state.address} */}

//           <AddUserInfor handleAddNewUser={this.handleAddNewUser} />

//           <br />
//           <br />
//           <DisplayInfor
//             listUsers={this.state.listUsers}
//             handleDeleteUser={this.handleDeleteUser}
//           />
//           <hr />
//         </div>
//         <div className="b"></div>
//       </>
//     );
//   }
// }

export default MyComponent;
