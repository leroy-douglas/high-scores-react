import React from "react";
import allCountryScores from "./Scores";
import { AllHighScoresHeader } from "./Headers";
import "./HighScoreTable.css";
import PlayerScore from "./PlayerScore";


const AllHighScores = _ => {
    const compare = ( score1, score2 ) => {
        if( score1.s === score2.s) return 0;
        if(score1.s > score2.s) return -1;
        return 1
    };
    
    const allScores = allCountryScores.reduce( 
        (AllCountries, country) => {
            let scoreList = [];
            for( let score of country.scores){
                scoreList = scoreList.concat(score);
            }

            return AllCountries.concat( scoreList);
        } , []);
        allScores.sort(compare);
    console.log("AllHighScores", allScores)
    return(
        <div className="all-high-scores-container">
            <AllHighScoresHeader />
            <div className="score-table">
                {
                    allScores.map(score => {
                        let psKey = `${score.n}psKey`;
                        return <PlayerScore key={psKey} score={score} />
                    })
                }
            </div>
        </div>
    );
};
export default AllHighScores;