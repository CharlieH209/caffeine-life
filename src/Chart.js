import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Line, defaults } from "react-chartjs-2";

defaults.global.defaultFontColor = "black";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #d8d8d8;
  border-radius: 2px;
  margin-top: 1.5rem;
  padding: 1rem;
  height: 85rem;
  width: 140rem;
`;

const ChartContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

const Chart = ({ caffeineTotal }) => {
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
    </Container>
  );
};

export default Chart;
