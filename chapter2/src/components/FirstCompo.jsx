const FirstComp = () => {
  let state = {
    name: "van",
    address: "vanguyendev",
    age: 32,
  };
  const handleClick = (event) => {
    // console.log("click me");
    console.log(event.target);
  };
  const handleOnMoverOver = () => {
    console.log(event);
  };

  return (
    <div>
      <h1>
        My name is {state.name} and my channel is {state.address}
      </h1>
      <button
        onMouseOver={handleOnMoverOver}
        className="border bg-blue-400 rounded py-2 px-4"
      >
        Hover me
      </button>
      <button
        onClick={handleOnMoverOver}
        className="border bg-blue-400 rounded py-2 px-4"
      >
        Click me
      </button>
    </div>
  );
};

export default FirstComp;
