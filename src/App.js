import React from "react";
import asteroid from "./asteroid.svg";
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
        <img src={asteroid} className="App-logo" alt="asteroid" />

        <MyH1 title="Js Lesson 1 " />

        <div class="container">
          <div class="row">
            <div class="col-sm">
              {" "}
              <MyButton title="tryck här" />
              <MyButton title="eller här" />
              <MyButton title="varför inte här?" />
            </div>
            <div class="col-sm">
              {" "}
              <MyList heading="Det här är en lista" content="Exempel text" />
            </div>
            <div class="col-sm">
              {" "}
              <MyCard
                header="Header"
                title="Det här är en rubrik"
                content="Här kommer lite text som inte handlar om något viktigt. Testar bara lite"
              />
            </div>
          </div>
        </div>

        <MyBreadcrum link="test" />
      </header>
    </div>
  );
}

export default App;
