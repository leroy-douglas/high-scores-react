import React, { useState } from "react";
import allCountryScores from "./Scores";
import { Header } from "./Headers";
import HighScores from "./HighScores";

const HighScoresByCountry = _ => {
    const [reorder, setReorder] = useState(1);

    const handler = _ => {
        setReorder(reorder * -1);
    };
    return(
        <div>
            <Header />
            <button id="reorder" onClick={handler}>Reorder Scores</button>
            <HighScores allHighScores={allCountryScores} orderState={reorder} />
        </div>
    );
};

export default HighScoresByCountry;