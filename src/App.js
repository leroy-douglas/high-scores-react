import React from 'react';
import AllHighScores from './AllHighScores';
import './App.css';

import HighScoresByCountry from "./HighScoresByCountry";

function App() {
  return (
    <div id="high-scores-container" className="App">
      <AllHighScores />
      <HighScoresByCountry />
    </div>
  );
}

export default App;
