import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

function Chart(Props) {
  let maxValue = 0;
  for (let i = 0; i < Props.dataPoints.length; i++) {
    if (Props.dataPoints[i].amount > maxValue) {
      maxValue = Props.dataPoints[i].amount;
    }
  }
  return (
    <div className="chart">
      {" "}
      {Props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.title}
          value={dataPoint.amount}
          maxValue={maxValue}
          label={dataPoint.title}
        />
      ))}
    </div>
  );
}

export default Chart;
