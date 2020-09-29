import React from 'react';
import allCountryScores from "./Scores";
import './App.css';
import { Header }  from "./Headers";
import HighScores from "./HighScores";

function App() {
  return (
    <div id="high-scores-container" className="App">
      <Header />
      <HighScores allHighScores={allCountryScores} />
    </div>
  );
}

export default App;
