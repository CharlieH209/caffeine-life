import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Start from "./Start";
import AppBar from "./AppBar";

const GlobalStyles = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  body {
    box-sizing: border-box;
    height: 100%;
    font-family: 'Source Code Pro', monospace;
    text-align: center;
    letter-spacing: 0.2rem;
  }

  #root {
    height: 100vh;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const App = () => (
  <Container>
    <AppBar />
    <Start />
    <GlobalStyles />
  </Container>
);

export default App;
