import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import DrinkCard from "./DrinkCard";
import { ChevronRight } from "@styled-icons/boxicons-solid/ChevronRight";
import energyLarge from "./assets/energy_large.png";
import cocacolaOrig from "./assets/coca_cola_original.png";
import espresso from "./assets/espresso.png";
import greenTea from "./assets/green_tea.png";
import icedCoffee from "./assets/iced_coffee.png";
import pepsiMax from "./assets/pepsi_max.png";
import redbullLarge from "./assets/red_bull_large.png";
import energyGeneric from "./assets/redbull_small.png";
import starbucksLarge from "./assets/starbucks_large.png";
import starbucksRegular from "./assets/starbucks_regular.png";
import starbucksSmall from "./assets/starbucks_small.png";
import tea from "./assets/tea.png";

const drinksArr = [
  {
    name: "Energy XL",
    src: energyLarge,
    caffeine: 32,
    size: 500,
    id: 1,
    active: false,
  },
  {
    name: "Generic Energy",
    src: energyGeneric,
    caffeine: 32,
    size: 250,
    id: 9,
    active: false,
  },
  {
    name: "Red Bull XL",
    src: redbullLarge,
    caffeine: 32,
    size: 450,
    id: 8,
    active: false,
  },
  {
    name: "Small Coffee",
    src: starbucksSmall,
    caffeine: 32,
    size: 200,
    id: 10,
    active: false,
  },
  {
    name: "Regular Coffee",
    src: starbucksRegular,
    caffeine: 32,
    size: 300,
    id: 11,
    active: false,
  },
  {
    name: "Large Coffee",
    src: starbucksLarge,
    caffeine: 32,
    size: 400,
    id: 12,
    active: false,
  },
  {
    name: "Coca Cola",
    src: cocacolaOrig,
    caffeine: 16,
    size: 330,
    id: 2,
    active: false,
  },
  {
    name: "Pepsi Max",
    src: pepsiMax,
    caffeine: 32,
    size: 330,
    id: 7,
    active: false,
  },
  {
    name: "Espresso",
    src: espresso,
    caffeine: 100,
    size: 50,
    id: 3,
    active: false,
  },
  {
    name: "Black Tea",
    src: tea,
    caffeine: 32,
    size: 250,
    id: 4,
    active: false,
  },
  {
    name: "Green Tea",
    src: greenTea,
    caffeine: 32,
    size: 250,
    id: 5,
    active: false,
  },
  {
    name: "Iced Late",
    src: icedCoffee,
    caffeine: 18,
    size: 450,
    id: 6,
    active: false,
  },
];

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
  grid-gap: 1rem;
`;

function DrinkSelector() {
  const [caffeineTotal, setCaffeineTotal] = useState(0);
  const [drinks, setDrinks] = useState(drinksArr);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (caffeineTotal === 0) console.log("test");
  };

  const handleSelect = (id, caffeine, size) => {
    let newDrinks = [...drinks];
    console.log(newDrinks);

    newDrinks.forEach((d) =>
      d.id === id ? (d.active = true) : (d.active = false)
    );

    setDrinks(newDrinks);

    setCaffeineTotal(caffeine * size);
  };

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
