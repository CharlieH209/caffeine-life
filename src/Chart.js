import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Line, defaults } from "react-chartjs-2";

defaults.global.defaultFontColor = "black";

const ChartContainer = styled.div`
  position: relative;
  height: 60rem;
  width: 120rem;
  border: 1px solid #d8d8d8;
  border-radius: 2px;
  padding: 1rem;
`;

const Chart = ({ caffeineTotal }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    let remainingCaffeine = caffeineTotal;
    let caffeineData = [];
    let labels = [];
    let hours = 1;

    const today = new Date();

    labels.push(today.getHours() + ":" + today.getMinutes());

    caffeineData.push(remainingCaffeine);

    while (remainingCaffeine > 1) {
      // N(t) = N_0 * (1/2) ^ (t / t_half)
      const caffeine = remainingCaffeine * 0.5 ** (hours / 6);

      hours++;
      today.setHours(today.getHours() + 1);
      labels.push(today.getHours() + ":" + today.getMinutes());
      remainingCaffeine = caffeine;

      if (remainingCaffeine > 1) caffeineData.push(caffeine);
      else caffeineData.push(0);
    }
    console.log(labels);
    console.log(caffeineData);

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

  return (
    <ChartContainer>
      <Line
        data={data}
        options={{
          responsive: true,
          maintainAspectRatio: true,
        }}
      />
    </ChartContainer>
  );
};

export default Chart;
