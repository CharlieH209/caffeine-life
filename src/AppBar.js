import React from "react";
import styled, { keyframes } from "styled-components";
import { Coffee } from "@styled-icons/feather/Coffee";

const Typing = keyframes`
  from { max-width: 0 }
  to { 
    max-width: 69%; 
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  float: left;
  display: inline-block;
  max-width: 69%;
  vertical-align: middle;
  margin: 1.5rem;
  font-weight: normal;
  white-space: nowrap;
  animation: ${Typing} 3s steps(40, end);
  overflow: hidden;
`;

const Container = styled.div`
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
  border-bottom: 0.1rem solid #d8d8d8;
  height: 6rem;
`;

const CoffeeIcon = styled(Coffee)`
  fill: #d8d8d8;
  height: 4rem;
  width: 4rem;
  float: left;
  display: inline-block;
  max-width: 29%;
  vertical-align: middle;
  margin: 1rem;
`;

const AppBar = () => (
  <Container>
    <CoffeeIcon />
    <Title>Caffeine Calculator</Title>
  </Container>
);

export default AppBar;
