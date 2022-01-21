import React, { useState } from "react";
import "./Expenses.css";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import Chart from "../Chart/Chart";

const Expenses = (Props) => {
  // adding a filter here
  const [filteredYear, setFilteredYear] = useState("2022");
  const saveFilterExpenses = (event) => {
    setFilteredYear(event);
  };
  const filteredExpenses = Props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div className="expenses">
      <Chart dataPoints={filteredExpenses} />
      <ExpensesFilter onFilterExpenses={saveFilterExpenses} />
      <ExpensesList Items={filteredExpenses} />
    </div>
  );
};

export default Expenses;
