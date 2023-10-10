import React from "react";
import "./DisplayInfor.scss";
import logo from "./../logo.svg";

//stateless vs statefull
// class DisplayInfor extends React.Component {
//   render() {
//     console.log(">>>Call me render");
//     // console.log(this.props);
//     //Destructuring array/object
//     const { listUsers } = this.props; //object
//     console.log(listUsers);
//     // console.table(listUsers);
//     // === const listUsers = this.props.listUsers;
//     //prop = >properties thuoc tinh, truyen du lieu from dad to kids
//     return (
//       <div className="display-infor-container">
//         {true && (
//           <>
//             {listUsers.map((user, index) => {
//               console.log(">>check map user:", user);
//               return (
//                 //   {/* the +m sign is to transform age of 18 string to number */}
//                 <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
//                   <div>My name is {user.name} </div>
//                   <div>My age is {user.age}</div>
//                   <div>
//                     <button
//                       onClick={() => this.props.handleDeleteUser(user.id)}
//                     >
//                       Delete
//                     </button>
//                   </div>
//                   <hr />
//                 </div>
//               );
//             })}
//             <hr />
//           </>
//         )}
//       </div>
//     );
//   }
// }

const DisplayInfor = (props) => {
  const { listUsers } = props; //object

  return (
    <div className="display-infor-container">
      {true && (
        <>
          {listUsers.map((user, index) => {
            console.log(">>check map user:", user);
            return (
              //   {/* the +m sign is to transform age of 18 string to number */}
              <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                <div>My name is {user.name} </div>
                <div>My age is {user.age}</div>
                <div>
                  <button onClick={() => props.handleDeleteUser(user.id)}>
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
};
export default DisplayInfor;
