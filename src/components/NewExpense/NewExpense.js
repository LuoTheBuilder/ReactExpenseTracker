import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import AddExpenseButton from "./AddExpenseButton";

const NewExpense = (Props) => {
  const [addStatus, setAddStatus] = useState("false");

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
    Props.onAddExpense(expenseData);
  };

  const openTheForm = (event) => {
    setAddStatus(event);
  };

  if (addStatus === true) {
    return (
      <div className="new-expense">
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onClickCancel={openTheForm}
        />
      </div>
    );
  } else {
    return (
      <div className="new-expense">
        <AddExpenseButton onClickAdd={openTheForm} />
      </div>
    );
  }
};

export default NewExpense;
