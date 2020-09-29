import React from "react";
import "./PlayerScore.css";

const PlayerScore = ({ score }) => {
    let nameKey = `${score.n}${score.s}`;
    let scoreKey = `${score.s}${score.n}`;
    return(
        <div key={score.n} className="player">
            <p key={nameKey} className="name">{score.n}</p>
            <p key={scoreKey} className="score">{score.s}</p>
        </div>
    );
} ;
export default PlayerScore;