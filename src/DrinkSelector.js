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

const FormTitle = styled.p`
  font-size: 2.2rem;
  margin: 2rem;
  white-space: nowrap;
  animation: ${Typing} 1.75s steps(40, end);
  overflow: hidden;
`;

const NextIcon = styled(ChevronRight)`
  fill: #d8d8d8;
  height: 7.5rem;
  width: 7.5rem;
`;

const SubmitContainer = styled.button`
  background: none;
  padding: 0px;
  border: none;
  cursor: pointer;
  margin-bottom: 2rem;
`;

const FormContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  border: 1px solid #d8d8d8;
  flex-direction: column;
  border-radius: 2px;
  height: auto;
  margin-top: 2rem;
`;

const CaffeineContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin: 2rem;
  grid-gap: 1.5rem;
`;

function DrinkSelector() {
  const [caffeineTotal, setCaffeineTotal] = useState(0);
  const [drinks, setDrinks] = useState(drinksArr);
  const [showChart, setShowChart] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    caffeineTotal > 0 && setShowChart(true);
  };

  const handleSelect = (id, caffeine, size) => {
    let newDrinks = [...drinks];

    newDrinks.forEach((d) =>
      d.id === id ? (d.active = true) : (d.active = false)
    );

    setDrinks(newDrinks);

    setCaffeineTotal(Math.round(caffeine * (size / 100)));
  };

  if (showChart) return <Chart caffeineTotal={caffeineTotal} />;

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormTitle>Please select a drink.</FormTitle>
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
      <SubmitContainer type="submit">
        <NextIcon type="submit" />
      </SubmitContainer>
    </FormContainer>
  );
}

export default DrinkSelector;
