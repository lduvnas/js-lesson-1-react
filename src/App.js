import React from "react";
import solar from "./solar.svg";
import "./App.css";
import MyButton from "./components/MyButton";
import MyH1 from "./components/MyH1";
import MyList from "./components/MyList";
import MyNavbar from "./components/MyNavbar";
import MyBreadcrum from "./components/MyBreadcrum";
import MyCard from "./components/MyCard";

function App() {
  return (
    <div className="App">
      <MyNavbar title="Testar React" />
      <header className="App-header">
        <img src={solar} className="App-logo" alt="solar" />

        <p>
          Js Lesson 1
          <MyH1 title="Det här är en rubrik" />
          <MyButton title="tryck här" />
          <MyButton title="eller här" />
          <MyButton title="varför inte här?" />
          <MyList heading="Det här är en lista" content="Exempel text" />
          <MyCard
            header="Header"
            title="Det här är en rubrik"
            content="Här kommer lite text som inte handlar om något viktigt. Testar bara lite"
          />
        </p>

        <MyBreadcrum link="test" />
      </header>
    </div>
  );
}

export default App;
