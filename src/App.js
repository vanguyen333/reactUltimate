// import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increaseCounter, decreaseCounter } from "./redux/action/counterAction";
import MyComponent from "./components/MyComponent";

import React from "react";
class App extends React.Component {
  state = {
    name: "Van",
    address: "Earth",
    age: 3,
  };
  handleClick = (event) => {
    // console.log(event.target);

    this.setState({
      name: "Ngoc",
      age: Math.floor(Math.random() * 100 + 1),
    });
    // this.setState({

    // });
  };
  handleOnChangeInput = (event) => {
    this.setState({
      name: event.target.value,
    });
    // console.log(event, event.target.value);
  };
  handleOnSubmit = (event) => {
    event.preventDefault(); //prevent refresh page after pressing submmit
    console.log(this.state);
  };
  //JSX
  render() {
    return (
      <div>
        My name is {this.state.name} and I'm {this.state.age}
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
            type="text"
            onChange={(event) => this.handleOnChangeInput(event)}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

// const App = () => {
//   const count = useSelector((state) => state.counter.count);
//   const dispatch = useDispatch();

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>Hoi Dan IT</p>
//         <div>Count = {count}</div>
//         <button onClick={() => dispatch(increaseCounter())}>Increase</button>
//         <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
//       </header>
//     </div>
//   );
// };

export default App;
