import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }
     body{
        width: 100%;
        margin: 0;
        padding: 0;
        background-color: #222;
    }


`;

export default GlobalStyle;
