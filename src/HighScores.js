import React from "react";
import "./HighScores.css";
import { HighScoreHeader } from "./Headers";
import HighScoreTable from "./HighScoreTable";

//{ /* HighScoreTable scores={ country.scores } */ }

const HighScores = ({ allHighScores }) => { 
    //console.log("HighScores arg", allHighScores)
    
    return (
        <div className="all-scores">
            {
                allHighScores.map(country => {
                    //console.log("HighScores", country.name)
                    let hsHeaderKey=`${country.name}HdrKey`;
                    let hsTableKey = `${country.name}TblKey`;
                    return (
                        <div key={country.name} className="score-card">
                            <HighScoreHeader key={hsHeaderKey} countryName={country.name} />
                            <HighScoreTable key={hsTableKey} scores={ country.scores } />
                        </div>

                    );
                })
            }
        </div>
    );
};


export default HighScores;