import energyLarge from "./energy_large.png";
import cocacolaOrig from "./coca_cola_original.png";
import espresso from "./espresso.png";
import greenTea from "./green_tea.png";
import icedCoffee from "./iced_coffee.png";
import pepsiMax from "./pepsi_max.png";
import redbullLarge from "./red_bull_large.png";
import energyGeneric from "./redbull_small.png";
import starbucksLarge from "./starbucks_large.png";
import starbucksRegular from "./starbucks_regular.png";
import starbucksSmall from "./starbucks_small.png";
import tea from "./tea.png";

const drinksArr = [
  {
    name: "Generic Energy XL",
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
    name: "Espresso",
    src: espresso,
    caffeine: 98.79,
    size: 89,
    id: 3,
    active: false,
  },
  {
    name: "Short Americano",
    src: starbucksSmall,
    caffeine: 47.55,
    size: 267,
    id: 10,
    active: false,
  },
  {
    name: "Tall Americano",
    src: starbucksRegular,
    caffeine: 47.55,
    size: 473,
    id: 11,
    active: false,
  },
  {
    name: "Grande Americano",
    src: starbucksLarge,
    caffeine: 47.55,
    size: 591,
    id: 12,
    active: false,
  },
  {
    name: "Iced Late",
    src: icedCoffee,
    caffeine: 18.81,
    size: 473,
    id: 6,
    active: false,
  },
  {
    name: "Coca Cola",
    src: cocacolaOrig,
    caffeine: 9.7,
    size: 330,
    id: 2,
    active: false,
  },
  {
    name: "Pepsi Max",
    src: pepsiMax,
    caffeine: 12.91,
    size: 330,
    id: 7,
    active: false,
  },
  {
    name: "Black Tea",
    src: tea,
    caffeine: 17.75,
    size: 250,
    id: 4,
    active: false,
  },
  {
    name: "Green Tea",
    src: greenTea,
    caffeine: 10.57,
    size: 250,
    id: 5,
    active: false,
  },
];

export default drinksArr;
