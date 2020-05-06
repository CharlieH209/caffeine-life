import React from "react";
import styled from "styled-components";
import { Coffee } from "@styled-icons/feather/Coffee";

const Title = styled.h2`
  font-size: 2.5rem;
  float: left;
  display: inline-block;
  max-width: 49%;
  vertical-align: middle;
  margin: 1.5rem;
  font-weight: normal;
`;

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  border-bottom: 0.1rem solid #d8d8d8;
`;

const CoffeeIcon = styled(Coffee)`
  fill: #d8d8d8;
  height: 4rem;
  width: 4rem;
  float: left;
  display: inline-block;
  max-width: 49%;
  vertical-align: middle;
  margin: 1rem;
`;

const Start = () => (
  <Container>
    <CoffeeIcon />
    <Title>Caffeine Calculator</Title>
  </Container>
);

export default Start;
