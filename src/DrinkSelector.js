import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import DrinkCard from "./DrinkCard";
import Chart from "./Chart";
import { ChevronRight } from "@styled-icons/boxicons-solid/ChevronRight";
import drinksArr from "./assets/drinks";

const Typing = keyframes`
  from { max-width: 0 }
  to { 
    max-width: 100%; 
  }
`;

const FadeIn = keyframes`
  0%   { opacity: 0; }
  100% { opacity: 0.9; }
`;

const FormTitle = styled.p`
  font-size: 2.2rem;
  margin-top: 2rem;
  white-space: nowrap;

  &.initial-run {
    animation: ${Typing} 1.75s steps(40, end);
  }

  overflow: hidden;
`;

const NextIcon = styled(ChevronRight)`
  fill: #d8d8d8;
  height: 7.5rem;
  width: 7.5rem;

  &:hover {
    fill: ${(props) => (props.active ? "#42f560" : "#d8d8d8")};
  }
`;

const SubmitContainer = styled.button`
  background: none;
  padding: 0px;
  border: none;
  cursor: ${(props) => (props.active ? "pointer" : "none")};
  margin-bottom: 2rem;

  &:hover {
    transform: ${(props) => (props.active ? "translateY(-3px)" : "")};

    &::after {
      transform: ${(props) => (props.active ? "translateY(-3px)" : "")};
      opacity: 0;
    }
  }

  &:active {
    transform: translateY(1px);
  }
`;

const FormContainer = styled.form`
  height: 75rem;
  width: 140rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #d8d8d8;
  flex-direction: column;
  border-radius: 2px;
  margin-top: 1.5rem;

  &.initial-run {
    animation: ${FadeIn} 2s forwards;
  }

  box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.2);
`;

const CaffeineContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  margin: 1rem 2.5rem;
  grid-gap: 2.5rem;
`;

function DrinkSelector() {
  const [caffeineTotal, setCaffeineTotal] = useState(0);
  const [drinks, setDrinks] = useState(drinksArr);
  const [showChart, setShowChart] = useState(false);
  const [intitalAnimate, setInitialAnimate] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setInitialAnimate(false);
    caffeineTotal > 0 && setShowChart(true);
  };

  const handleRestart = () => setShowChart(false);

  const handleSelect = (id, caffeine, size) => {
    let newDrinks = [...drinks];

    newDrinks.forEach((d) =>
      d.id === id ? (d.active = true) : (d.active = false)
    );

    setDrinks(newDrinks);

    setCaffeineTotal(Math.round(caffeine * (size / 100)));
  };

  if (showChart)
    return (
      <Chart caffeineTotal={caffeineTotal} handleRestart={handleRestart} />
    );

  return (
    <FormContainer
      onSubmit={handleSubmit}
      className={intitalAnimate && "initial-run"}
    >
      <FormTitle className={intitalAnimate && "initial-run"}>
        Please select a drink.
      </FormTitle>
      <CaffeineContainer>
        {drinks &&
          drinks.map((d) => (
            <DrinkCard
              src={d.src}
              name={d.name}
              size={d.size}
              caffeine={d.caffeine}
              id={d.id}
              key={d.id}
              active={d.active}
              onClick={handleSelect}
            />
          ))}
      </CaffeineContainer>
      <SubmitContainer type="submit" active={caffeineTotal > 0}>
        <NextIcon type="submit" active={caffeineTotal > 0} />
      </SubmitContainer>
    </FormContainer>
  );
}

export default DrinkSelector;
