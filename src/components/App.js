import React from 'react';
import {createGlobalStyle} from 'styled-components'
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

const App = () => {
    return (
        <div>
            <GlobalStyle />
            <Board/>
        </div>
    );
};

export default App;
