import React from "react";
import Welcome from "./components/Welcome/Welcome";
import "./App.css";

function App() {
  return (
    <div className="App" data-testid="App">
      <header className="App-header">
        <Welcome />
      </header>
    </div>
  );
}

export default App;
