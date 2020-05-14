import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

body, *::before, *::after{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html{
    font-size: 62.5%;
}

body{
    height: 100vh;
    background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
    display: flex;
    justify-content: center;
    font-size: 1.6rem;
    font-family: 'Baloo Bhaina 2', cursive;
}
`;

export default GlobalStyle;
