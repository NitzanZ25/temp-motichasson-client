import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ResponsiveAppBar from "./components/TopBar/topbar";
import TopBar from "./components/TopBar/topbar";

function App() {
  return (
    <div className="App">
      <TopBar />
      <header className="App-header">
        <p>Orini</p>
      </header>
    </div>
  );
}

export default App;
