/* eslint-disable no-lone-blocks */
import React, { useEffect, useState } from "react";
import "./DisplayInfor.scss";
import logo from "./../logo.svg";

const DisplayInfor = (props) => {
  const { listUsers } = props; //object
  const [isShowHideListUser, setShowHideListUser] = useState(true);

  const handleShowHideListUser = () => {
    setShowHideListUser(!isShowHideListUser);
  };

  console.log("call me render");
  useEffect(() => {
    if (listUsers.length === 0) {
      alert("You deleted all users ");
    }
    setTimeout(() => {
      document.title = "Van and Green Pear";
    }, 3000);
    console.log("Call me useEffect");
  }, []);
  return (
    <div className="display-infor-container">
      <div>
        <span onClick={() => handleShowHideListUser()}>
          {isShowHideListUser === true ? "Hide list users" : "Show list users"}
        </span>
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
