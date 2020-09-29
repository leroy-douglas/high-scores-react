import React from "react";

const Header = _  => {
    return(
        <h1> High Scores per Country</h1>
    );
};

const HighScoreHeader = ({ countryName}) => {
    return(
        <h2>High Scores: {countryName}</h2>
    );
};

export  { Header, HighScoreHeader };