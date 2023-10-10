import React, { useState } from "react";
// class AddUserInfor extends React.Component {
//   state = {
//     name: "",
//     address: "",
//     age: "",
//   };

//   handleOnChangeInput = (event) => {
//     //bad code
//     //this.state.age = event.target.value
//     this.setState({
//       name: event.target.value,
//     });
//     // console.log(event, event.target.value);
//   };
//   handleOnChangeAge = (event) => {
//     this.setState({
//       age: event.target.value,
//     });
//     // console.log(event, event.target.value);
//   };
//   handleOnSubmit = (event) => {
//     event.preventDefault(); //prevent refresh page after pressing submmit
//     console.log(this.state);
//     this.props.handleAddNewUser({
//       id: Math.floor(Math.random() * 100 + 1) + "-random",
//       name: this.state.name,
//       age: this.state.age,
//     });
//   };
//   render() {
//     return (
//       <div>
//         My name is {this.state.name} and I'm {this.state.age}
//         <form onSubmit={(event) => this.handleOnSubmit(event)}>
//           <label>Your name: </label>
//           <input
//             value={this.state.name}
//             type="text"
//             onChange={(event) => this.handleOnChangeInput(event)}
//           />

//           <label>Your age: </label>
//           <input
//             value={this.state.age}
//             type="text"
//             onChange={(event) => this.handleOnChangeAge(event)}
//           />
//           <button>Submit</button>
//         </form>
//       </div>
//     );
//   }
// }
const AddUserInfor = (props) => {
  // state = {
  //   name: "",
  //   address: "",
  //   age: "",
  // };
  const [name, setName] = useState("");
  const [address, setAddress] = useState("Hoi Dan IT");
  const [age, setAge] = useState("");
  const handleOnChangeInput = (event) => {
    //bad code
    //this.state.age = event.target.value
    //   this.setState({
    //     name: event.target.value,
    //   });
    //   // console.log(event, event.target.value);
    setName(event.target.value);
  };
  const handleOnChangeAge = (event) => {
    // this.setState({
    //   age: event.target.value,
    // });
    setAge(event.target.value);
    // console.log(event, event.target.value);
  };
  const handleOnSubmit = (event) => {
    event.preventDefault(); //prevent refresh page after pressing submmit

    props.handleAddNewUser({
      id: Math.floor(Math.random() * 100 + 1) + "-random",
      name: name,
      age: age,
    });
  };
  return (
    <div>
      My name is {name} and I'm {age}{" "}
      <form onSubmit={(event) => handleOnSubmit(event)}>
        <label>Your name: </label>{" "}
        <input
          value={name}
          type="text"
          onChange={(event) => handleOnChangeInput(event)}
        />
        <label>Your age: </label>
        <input
          value={age}
          type="text"
          onChange={(event) => handleOnChangeAge(event)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};
export default AddUserInfor;
