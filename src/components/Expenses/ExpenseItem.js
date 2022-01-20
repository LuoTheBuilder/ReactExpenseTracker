import "./ExpenseItem.css";
import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (Props) => {
  const [title, setTitle] = useState(Props.title);

  const clickHandler = () => {
    setTitle("booya!");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={Props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${Props.amount}</div>
        <button onClick={clickHandler}>Change Title</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
