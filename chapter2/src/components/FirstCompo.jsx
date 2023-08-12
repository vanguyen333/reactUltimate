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

  const handleOnMouseOver = (event) => {
    console.log(event.pageX);
  };

  return (
    <div>
      <h1>
        My name is {state.name} and my age is {state.age}
      </h1>
      <button
        onMouseOver={handleOnMouseOver}
        className="border bg-blue-400 rounded py-2 px-4"
      >
        Hover me
      </button>
      <button
        onClick={handleClick}
        className="border bg-blue-400 rounded py-2 px-4"
      >
        Click me
      </button>
    </div>
  );
};

export default FirstComp;
