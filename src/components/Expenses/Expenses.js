import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpenseDate from "./ExpenseDate";

const Expenses = (Props) => {
  // adding a filter here
  const saveFilterExpenses = (event) => {
    const expenses = { event, id: Math.random().toString() };
    console.log(expenses);
  };

  return (
    <div className="expenses">
      <ExpensesFilter onFilterExpenses={saveFilterExpenses} />
      {Props.expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </div>
  );
};

export default Expenses;
