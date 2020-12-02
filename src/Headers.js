import React from "react";
import "./Header.css";

const AllHighScoresHeader = _ => {
    return (
        <h2>All High Scores</h2>
    );
};

const Header = _  => {
    return(
        <div>
            <h2> High Scores per Country</h2>
        </div>      
    );
};

const HighScoreHeader = ({ countryName}) => {
    return(
        <h3>High Scores: {countryName}</h3>
    );
};

export { Header, AllHighScoresHeader, HighScoreHeader };