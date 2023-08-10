import React, { useRef, useState, useEffect } from "react";

import axios from "axios";
import { useHistory } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";

import { useAuth } from "../contexts/AuthContext";

import { auth } from "../firebase";

export default function Chats() {
  const didMountRef = useRef(false);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    await auth.signOut();
    history.push("/");
  }

  async function getFile(url) {
    let response = await fetch(url);
    let data = await response.blob();
    return new File([data], "test.jpg", { type: "image/jpeg" });
  }

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;

      if (!user || user === null) {
        history.push("/");
        return;
      }
      // Get-or-Create should be in a Firebase Function
      axios
        .get("https://api.chatengine.io/users/me/", {
          headers: {
            "project-id": "2fe83745-0d81-46ee-8d6c-b1269a7add6a",
            "user-name": user.email,
            "user-secret": user.uid,
          },
        })
        .then(() => setLoading(false))

        .catch((e) => {
          let formdata = new FormData();
          formdata.append("email", user.email);
          formdata.append("username", user.email);
          formdata.append("secret", user.uid);

          getFile(user.photoURL).then((avatar) => {
            formdata.append("avatar", avatar, avatar.name);
            axios
              .post("https://api.chatengine.io/users/", formdata, {
                headers: {
                  "private-key": "60e68776-f52f-4e70-ae23-6f28977ae82c",
                },
              })
              .then(() => setLoading(false))
              .catch((e) => console.log("e", e.response));
          });
        });
    }
  }, [user, history]);

  if (!user || loading) return <div />;

  return (
    <div className="chats-page">
      <div className="nav-bar">
        <div className="logo-tab">chatchit</div>

        <div onClick={handleLogout} className="logout-tab">
          Sign Out
        </div>
      </div>

      <ChatEngine
        height="calc(100vh - 63px)"
        projectID="2fe83745-0d81-46ee-8d6c-b1269a7add6a"
        username={user.email}
        userSecret={user.uid}
      />
    </div>
  );
}

// export default Chats;

// import React, { useRef, useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";
// import { ChatEngine } from "react-chat-engine";
// import { auth } from "../firebase";

// import { useAuth } from "../contexts/AuthContext";
// import axios from "axios";

// const Chats = () => {
//   const history = useHistory();
//   const { user } = useAuth();
//   const [loading, setLoading] = useState(true);

//   const handleLogout = async () => {
//     await auth.signOut();

//     history.push("/");
//   };

//   const getFile = async (url) => {
//     const response = await fetch(url);
//     const data = await response.blob();
//     return new File([data], "userPhoto.jpg", { type: "image/jpeg" });
//   };

//   useEffect(() => {
//     if (!user) {
//       history.push("/");

//       return;
//     }

//     axios
//       .get("https://api.chatengine.io/users/me", {
//         headers: {
//           "project-id": "2fe83745-0d81-46ee-8d6c-b1269a7add6a",
//           "user-name": user.email,
//           "user-secret": user.uid,
//         },
//       })
//       .then(() => {
//         setLoading(false);
//       })
//       .catch(() => {
//         let formdata = new FormData();
//         formdata.append("email", user.email);
//         formdata.append("username", user.displayName);
//         formdata.append("secret", user.uid);

//         getFile(user.photoURL).then((avatar) => {
//           formdata.append("avatar", avatar, avatar.name);

//           axios
//             .post("https://api.chatengine.io/users/", formdata, {
//               headers: {
//                 "private-key": "60e68776-f52f-4e70-ae23-6f28977ae82c",
//               },
//             })
//             .then(() => setLoading(false))
//             .catch((error) => console.log(error));
//         });
//       });
//   }, [user, history]);

//   if (!user || loading) return "Loading...";

//   return (
//     <div className="chats-page">
//       <div className="nav-bar">
//         <div className="logo-tab">Chatchit</div>
//         <div onClick={handleLogout} className="logout-tab">
//           Logout
//         </div>
//       </div>
//       <ChatEngine
//         height="calc(100vh - 66px)"
//         projectID="2fe83745-0d81-46ee-8d6c-b1269a7add6a"
//         userName="user.email"
//         userSecret="user.uid"
//       />
//     </div>
//   );
// };

// export default Chats;
