import React, { useState } from "react";

const FirstComp = () => {
  // Using the useState hook to manage state
  const [state, setState] = useState({
    name: "van",
    address: "vanguyendev",
    age: 32,
  });

  // handleClick function to update the name in the state
  const handleClick = () => {
    console.log(">> Clicked my button");
    console.log("My name is", state.name);
    // Use the setState function to update the state
    setState({ ...state, name: "Giuse" });
  };

  const handleOnMouseOver = (event) => {
    console.log(event.pageX);
  };

  return (
    <div>
      <h1>
        My name is {state.name} and my channel is {state.address}
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
