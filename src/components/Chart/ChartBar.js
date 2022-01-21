import React from "react";
import "./ChartBar.css";

const ChartBar = (Props) => {
  let barFillHeight = "0%";
  let maxHeight = "0%";

  if (Props.maxValue > 0) {
    barFillHeight = (Props.value / Props.maxValue) * 100;
    console.log(barFillHeight);
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner ">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{Props.label}</div>
    </div>
  );
};

export default ChartBar;
