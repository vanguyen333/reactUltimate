import React, { useState } from "react";
// class AddUserInfor extends React.Component {
//   state = {
//     name: "",
//     address: "Green Pear",
//     age: "",
//   };

//   handleOnChangeInput = (event) => {
//     //bad code
//     //this.state.age = event.target.value
//     this.setState({
//       name: event.target.value,
//     });
//   };

//   handleOnChangeAge = (event) => {
//     this.setState({
//       age: event.target.value,
//     });
//   };

//   handleOnSubmit = (event) => {
//     event.preventDefault(); //stop reloading page after pressing ok button from alert me

//     this.props.handleAddNewUser({
//       id: Math.floor(Math.random() * 100 + 1) + "-random",
//       name: this.state.name,
//       age: this.state.age,
//     });
//   };
//   render() {
//     return (
//       <div>
//         My name is {this.state.name} and my age is {this.state.age}
//         <form onSubmit={(event) => this.handleOnSubmit(event)}>
//           <label>Your name: </label>
//           <input
//             value={this.state.name} //set original value
//             type="text"
//             onChange={(event) => this.handleOnChangeInput(event)}
//           />
//           <label>Your age: </label>
//           <input
//             value={this.state.age} //set original value
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
  const [name, setName] = useState("");
  const [address, setAddress] = useState("Green Pear");
  const [age, setAge] = useState("");

  const handleOnChangeInput = (event) => {
    setName(event.target.value);
  };

  const handleOnChangeAge = (event) => {
    setAge(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault(); //stop reloading page after pressing ok button from alert me

    props.handleAddNewUser({
      id: Math.floor(Math.random() * 100 + 1) + "-random",
      name: name,
      age: age,
    });
  };
  return (
    <div>
      My name is {name} and my age is {age}
      <form onSubmit={(event) => handleOnSubmit(event)}>
        <label>Your name: </label>
        <input
          value={name} //set original value
          type="text"
          onChange={(event) => handleOnChangeInput(event)}
        />
        <label>Your age: </label>
        <input
          value={age} //set original value
          type="text"
          onChange={(event) => handleOnChangeAge(event)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddUserInfor;
