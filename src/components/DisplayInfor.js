/* eslint-disable no-lone-blocks */
import React, { useState } from "react";
import "./DisplayInfor.scss";
import logo from "./../logo.svg";

//statless vs statefull
// class DisplayInfor extends React.Component {
//   render() {
//     console.log("Call me render");
//     //destructuring array/object

//     const { listUsers } = this.props; //object
//     // console.table(listUsers); //print users as table
//     //   console.log(listUsers);
//     // console.table(listUsers);
//     return (
//       <div className="display-infor-container">
//         {/* <img src={logo} /> */}

//         {/* if false, will hide users */}
//         {true && (
//           <>
//             {listUsers.map((user, index) => {
//               {
//                 /* console.log(">>>Check map user:", user); */
//               }
//               //the plus + sign will convert string to number
//               {
//                 return (
//                   <div>
//                     <div
//                       key={user.id}
//                       className={+user.age > 18 ? "green" : "red"}
//                     >
//                       <div>My name's {user.name}</div>
//                       <div>My age's {user.age} </div>
//                     </div>
//                     <di>
//                       <button
//                         onClick={() => this.props.handleDeleteUser(user.id)}
//                       >
//                         Delete
//                       </button>
//                     </di>
//                     <hr />
//                   </div>
//                 );
//               }
//             })}
//           </>
//         )}
//       </div>
//     );
//   }
// }

const DisplayInfor = (props) => {
  const { listUsers } = props; //object
  const [isShowHideListUser, setShowHideListUser] = useState(true);
  // this.state = {
  //   isShowHideListUser: true,
  // };

  const handleShowHideListUser = () => {
    alert("click me");
    setShowHideListUser(!isShowHideListUser);
  };
  return (
    <div className="display-infor-container">
      <div>
        <span onClick={() => handleShowHideListUser()}>Show list users</span>
      </div>
      {isShowHideListUser && (
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
                    <button onClick={() => props.handleDeleteUser(user.id)}>
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
};

export default DisplayInfor;
