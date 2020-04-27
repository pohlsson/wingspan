import React from 'react';
import styled, { createGlobalStyle } from 'styled-components'
import CsvParse from '@vtex/react-csv-parse'
import logo from '../logo.svg';
import Board from "./Board";

const GlobalStyle = createGlobalStyle`
    html, body, root {
        height: 100%;
        width: 100%;
        margin: 0;
    }
    body {
        background: url("../../images/background.jpg") no-repeat center center fixed;
    }
`;

const keys = [
    "ID",
    "ScientificName",
    "EnglishName",
    "GermanName",
    "PowerType",
    "PowerCategory",
    "PowerDetails",
    "Predator",
    "Flocking",
    "VictoryPoints",
    "NestType",
    "EggLimit",
    "WingspanCM",
    "HabitatForest",
    "HabitatGrasslands",
    "HabitatWetlands",
    "FoodNone",
    "FoodWild",
    "FoodInvertebrate",
    "FoodSeed",
    "FoodFruit",
    "FoodFish",
    "FoodRodent"
];

const App = () => {

    return (
        <div>
            <GlobalStyle />
            <Board/>
            {/*<CsvParse*/}
            {/*    keys={keys}*/}
            {/*    onDataUploaded={data => console.log(data)}*/}
            {/*    onError={data => console.log(data)}*/}
            {/*    render={onChange => <input type="file" onChange={onChange}/>}*/}
            {/*/>*/}
        </div>
    );
};

export default App;
