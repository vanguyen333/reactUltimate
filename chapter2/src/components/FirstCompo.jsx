import React, { useState } from "react";

const FirstComp = () => {
  // Using the useState hook to manage state
  const [state, setState] = useState({
    name: "van",
    address: "vanguyendev",
    age: 32,
  });

  // handleClick function to update the name and age in the state.
  const handleClick = () => {
    console.log(">> Clicked my button");
    // Use the setState function to update the state
    setState({
      ...state,
      name: "GIUSE",
      age: Math.floor(Math.random() * 100 + 1),
    });
  };

  // const handleOnMouseOver = (event) => {
  //   console.log(event.pageX);
  // };
  const handleOnchangeInput = (event) => {
    console.log(event, event.target.value);
  };

  return (
    <div>
      My name is {state.name} and my age is {state.age}
      {/* <button
        onClick={handleClick}
        className="border bg-blue-400 rounded py-2 px-4"
      >
        Click me
      </button> */}
      <form action="">
        <input
          onChange={handleOnchangeInput}
          type="text"
          className="border shadow"
        />
        <button className="border bg-blue-400 rounded py-2 px-4">Submit</button>
      </form>
    </div>
  );
};

export default FirstComp;
