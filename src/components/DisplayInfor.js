import React, { useEffect, useState } from "react";
import "./DisplayInfor.scss";
import logo from "./../logo.svg";

const DisplayInfor = (props) => {
  const { listUsers } = props; //object
  const [isShowHideListuser, setShowHideListuser] = useState(true);

  const handleShowHideListUser = () => {
    alert("click me");
    setShowHideListuser(!isShowHideListuser);
  };
  console.log(">>>call me render");
  useEffect(() => {
    if (listUsers.length === 0) {
      alert("you deleted all the users");
    }
    console.log(">>>call me useEffect");
  }, [listUsers]);
  return (
    <div className="display-infor-container">
      <div>
        <span onClick={() => handleShowHideListUser()}>
          {isShowHideListuser === true ? "Hide list users" : "Show ist users"}
        </span>
      </div>
      {isShowHideListuser && (
        <>
          {listUsers.map((user, index) => {
            {
              /* console.log(">>check map user:", user); */
            }
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
