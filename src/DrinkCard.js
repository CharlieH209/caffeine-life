import React from "react";
import styled from "styled-components";

const Card = styled.div`
  height: 25rem;
  width: 20rem;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  box-shadow: ${(props) =>
    props.active
      ? "inset 0px 0.5rem 1rem rgba(0, 0, 0, 0.2);"
      : "0 1rem 1rem rgba(0, 0, 0, 0.2);"}

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${(props) =>
      props.active
        ? "inset 0px 0.5rem 1rem rgba(0, 0, 0, 0.2);"
        : "0 1rem 1rem rgba(0, 0, 0, 0.2);"}

    &::after {
      transform: scaleX(1.4) scaleY(1.6);
      opacity: 0;
    }
  }

  &:active {
    transform: translateY(1px);
    box-shadow: inset 0px 0.5rem 1rem rgba(0, 0, 0, 0.2);
  }
`;

const DrinkContainer = styled.div`
  height: 20rem;
`;

const Drink = styled.img`
  height: 100%;
  width: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border: none;
`;

const DrinkTitle = styled.p`
  font-size: 1.4rem;
  margin: 0.2rem 0rem;
`;

const DrinkSize = styled.p`
  font-size: 1.4rem;
`;

function DrinkCard({ src, name, size, caffeine, id, active, onClick }) {
  return (
    <Card onClick={() => onClick(id, caffeine, size)} active={active}>
      <DrinkContainer>
        <Drink src={src} />
      </DrinkContainer>
      <DrinkTitle>{name}</DrinkTitle>
      <DrinkSize>({size}ml)</DrinkSize>
    </Card>
  );
}

export default DrinkCard;
