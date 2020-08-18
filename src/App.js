import React from "react";
import logo from "./logo.svg";
import solar from "./solar.svg";
import "./App.css";
import MyButton from "./components/MyButton";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={solar} className="App-logo" alt="solar" />

        <p>
          Js Lesson 1
          <MyButton title="tryck här" />
          <MyButton title="eller här" />
          <MyButton title="varför inte här?" />
        </p>

        <p>
          <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
