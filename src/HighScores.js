import React from "react";
import "./HighScores.css";
import { HighScoreHeader } from "./Headers";
import HighScoreTable from "./HighScoreTable";

const compare = ( name1, name2 ) => {
    console.log(name1.name, name2.name)
    if (name1.name === name2.name) return 0;
    if (name1.name > name2.name) return 1;
    return -1
};

const HighScores = ({ allHighScores, orderState }) => {     
    return (
        <div className="all-scores">
            {
                allHighScores.sort(compare).map(country => {
                    let hsHeaderKey=`${country.name}HdrKey`;
                    let hsTableKey = `${country.name}TblKey`;
                    return (
                            <div key={country.name} className="score-card">
                                <HighScoreHeader key={hsHeaderKey} countryName={country.name} />
                                <HighScoreTable key={hsTableKey} scores={ country.scores } orderState={orderState}/>
                            </div>
                    );
                })
            }
        </div>
    );
};


export default HighScores;