import React, { useState } from "react";
import "./Expenses.css";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpenseDate from "./ExpenseDate";
import ExpensesList from "./ExpensesList";

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
      <ExpensesFilter onFilterExpenses={saveFilterExpenses} />
      <ExpensesList Items={filteredExpenses} />
    </div>
  );
};

export default Expenses;
