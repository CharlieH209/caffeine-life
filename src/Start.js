import React, { useState } from "react";
import styled from "styled-components";
import UserForm from "./UserForm";

const WelcomeText = styled.p`
  font-size: 2.2rem;
  margin: 3.5rem;
`;

const Container = styled.div`
  margin-bottom: 10rem;
`;

const StartButton = styled.button`
  text-decoration: none;
  padding: 1rem 2rem;
  display: inline-block;
  border-radius: 8rem;
  transition: all 0.2s;
  position: relative;
  font-size: 1.3rem;
  background-color: #d8d8d8;
  color: black;
  border: 1px solid #d8d8d8;
  cursor: pointer;
  opacity: 0.9;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);

    &::after {
      transform: scaleX(1.4) scaleY(1.6);
      opacity: 0;
    }
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  }

  &::after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 10rem;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all 0.4s;
    background-color: #d8d8d8;
  }
`;

const Start = () => {
  const [start, setStart] = useState(false);

  if (start) return <UserForm />;

  return (
    <Container>
      <WelcomeText>Welcome to Caffeine Calculator!</WelcomeText>
      <WelcomeText>Press start to begin...</WelcomeText>
      <StartButton onClick={() => setStart(true)}>Start</StartButton>
    </Container>
  );
};

export default Start;
