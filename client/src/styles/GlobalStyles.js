import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before{
    box-sizing: border-box;
  }
  img{
    display: block;
    max-width: 100%;
  }
  body{
    margin: 0;
    font-family: "Oswald", sans-serif;
    background-color: #FFFAEA;
    width: 1200px;
    margin-right:auto ;
    margin-left: auto;
    /* background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(252,213,170,1) 100%);
    background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(166,49,99,0.7868389999657346) 100%);
    background-repeat: no-repeat;
    background-size: 100%;
    height: 100vh; */
  }
  a{
    text-decoration: none;
    color: inherit;
  }
  ul{
    list-style: none;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
  }
  textarea{
    resize: none;
    height: 60px;
    
  }
`;

export { GlobalStyles };
