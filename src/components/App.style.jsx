import {createGlobalStyle} from "styled-components";

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

export {
    GlobalStyle
};
