import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (Props) => {
  if (Props.Items.length === 0) {
    return <h2 className="expenses-list__fallback">No items were found.</h2>;
  } else {
    return (
      <ul className="expenses-list">
        {Props.Items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </ul>
    );
  }
};

export default ExpensesList;
