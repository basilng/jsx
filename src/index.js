// Import the React and ReactDOM librarties
import React from "react";
import ReactDOM from "react-dom";

//Create a react component
const App = () => {
  const buttonText = "Click Me!";
  const labelText = "Enter name";
  const style = { backgroundColor: "blue", color: "white" };
  return (
    <div>
      <label className="label" for="name">
        {labelText}
      </label>
      <input id="name" type="text" />
      <button style={style}>{buttonText}</button>
    </div>
  );
};
//Take the react component and show it on the screen

ReactDOM.render(<App />, document.querySelector("#root"));
