import React from "react";
import "./HighScoreTable.css";
import PlayerScore from "./PlayerScore";

const compare = (score1, score2) => {
    if (score2.s === score1.s) return 0;
    if (score2.s >  score1.s) return 1;
    return -1;
};
const HighScoreTable = ( { scores } ) => {
    return(
        <>
            <div className="player score-heading">
                <p className="name">Name</p><p className="score">Score</p>
            </div>
            <div className="score-table">
                {
                    
                    scores.sort(compare).map(score => {
                        let psKey = `${score.n}psKey`;
                        //console.log("HighScoreTable", psKey)
                        return (
                            <PlayerScore key={psKey} score={score} />
                        );
                    })
                }
            </div>
        </>
    );
};

export default HighScoreTable;