import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Line, defaults } from "react-chartjs-2";
import { ChevronLeft } from "@styled-icons/boxicons-solid/ChevronLeft";

defaults.global.defaultFontColor = "black";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #d8d8d8;
  border-radius: 2px;
  margin-top: 1.5rem;
  padding: 2.5rem;
  height: 75rem;
  width: 140rem;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.2);
`;

const ChartContainer = styled.div`
  position: relative;
  max-height: 40rem;
  width: 92.5%;
`;

const IconContainer = styled.button`
  background: none;
  padding: 0px;
  border: none;
  cursor: pointer;

  &:hover {
    transform: translateY(-3px);

    &::after {
      transform: translateY(-3px);
      opacity: 0;
    }
  }

  &:active {
    transform: translateY(1px);
  }
`;

const BackIcon = styled(ChevronLeft)`
  fill: #d8d8d8;
  height: 7.5rem;
  width: 7.5rem;
  display: block;

  &:hover {
    fill: #42f560;
  }
`;

const Chart = ({ caffeineTotal, handleRestart }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    let remainingCaffeine = caffeineTotal;
    let caffeineData = [];
    let labels = [];
    let hours = 1;

    const today = new Date();

    labels.push(getFormattedDate(today));

    caffeineData.push(remainingCaffeine);

    while (remainingCaffeine > 1) {
      // N(t) = N_0 * (1/2) ^ (t / t_half)
      const caffeine = Math.round(remainingCaffeine * 0.5 ** (hours / 6));

      hours++;
      today.setHours(today.getHours() + 1);
      labels.push(getFormattedDate(today));
      remainingCaffeine = caffeine;

      if (remainingCaffeine > 1) caffeineData.push(caffeine);
      else caffeineData.push(0);
    }

    setData({
      labels: labels,
      datasets: [
        {
          label: "Caffeine Total (mg)",
          backgroundColor: "#1769aa",
          borderColor: "#1769aa",
          data: caffeineData,
        },
      ],
    });
  }, [caffeineTotal]);

  const getFormattedDate = (today) =>
    today.getMinutes() > 9
      ? today.getHours() + ":" + today.getMinutes()
      : today.getHours() + ":0" + today.getMinutes();

  return (
    <Container>
      <ChartContainer>
        <Line
          data={data}
          options={{
            responsive: true,
            maintainAspectRatio: true,
          }}
        />
      </ChartContainer>
      <IconContainer>
        <BackIcon onClick={handleRestart} type="submit" />
      </IconContainer>
    </Container>
  );
};

export default Chart;
