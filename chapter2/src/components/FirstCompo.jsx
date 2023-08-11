const FirstComp = () => {
  let state = {
    name: "van",
    address: "vanguyendev",
    age: 32,
  };
  return (
    <div>
      <h1>
        My name is {state.name} and my channel is {state.address}, I am{" "}
        {state.age} years of age.
      </h1>
      {/* hi there */}
    </div>
  );
};

export default FirstComp;
