import React from "react";
import "./HighScoreTable.css";
import PlayerScore from "./PlayerScore";

const HighScoreTable = ( { scores } ) => {
    return(
        <>
            <div className="player score-heading">
                <p className="name">Name</p><p className="score">Score</p>
            </div>
            <div className="score-table">
                {
                    scores.map(score => {
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