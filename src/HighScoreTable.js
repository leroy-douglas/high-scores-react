import React from "react";
import "./HighScoreTable.css";
import PlayerScore from "./PlayerScore";


const HighScoreTable = ( { scores, orderState } ) => {
    const compare = (score1, score2) => {
        if (score2.s === score1.s) return 0;
        if (score2.s > score1.s) return 1 * orderState ;
        return -1 * orderState;
    };

    console.log("HighScoreTable(): orderState", orderState)
    return(
        <>
            <div className="score-heading">
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