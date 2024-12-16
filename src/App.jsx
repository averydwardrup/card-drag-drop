import { useState } from "react";
import reactLogo from "./assets/react.svg";
import siteLogo from "/logo.svg";
import "./App.css";
import NavBar from "./components/NavBar.jsx";
import PlayerSet from "./components/PlayerSet.jsx";

function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={siteLogo} className="logo react" alt="Site logo" />
        </a>
        {/*<a href="https://react.dev" target="_blank">*/}
        {/*  <img src={reactLogo} className="logo react" alt="React logo" />*/}
        {/*</a>*/}
      </div>
      {/*<NavBar />*/}
      <h1 className="is-size-1">NFL Active Players</h1>
      <PlayerSet />
    </>
  );
}

export default App;
