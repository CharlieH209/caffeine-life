import React from "react";
import styled from "styled-components";

const Card = styled.div`
  height: 20rem;
  width: 20rem;
  border: 1px solid ${(props) => (props.active ? "red" : "#d8d8d8")};
`;

const DrinkContainer = styled.div`
  height: 15rem;
  margin-bottom: 1rem;
`;

const Drink = styled.img`
  height: 100%;
  width: auto;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border: none;
`;

const DrinkTitle = styled.p`
  font-size: 1.4rem;
  width: 20rem;
  padding-bottom: 2rem;
  margin-bottom: 1rem;
`;

function DrinkCard({ src, name, size, caffeine, id, active, onClick }) {
  return (
    <Card onClick={() => onClick(id, caffeine, size)} active={active}>
      <DrinkContainer>
        <Drink src={src} />
      </DrinkContainer>
      <DrinkTitle>
        {name} ({size}ml)
      </DrinkTitle>
    </Card>
  );
}

export default DrinkCard;
