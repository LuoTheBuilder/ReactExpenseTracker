import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (Props) => {
  return (
    <div className="expenses">
      <ExpenseItem
        title={Props.expenses[0].title}
        amount={Props.expenses[0].amount}
        date={Props.expenses[0].date}
      />
      <ExpenseItem
        title={Props.expenses[1].title}
        amount={Props.expenses[1].amount}
        date={Props.expenses[1].date}
      />
      <ExpenseItem
        title={Props.expenses[2].title}
        amount={Props.expenses[2].amount}
        date={Props.expenses[2].date}
      />
      <ExpenseItem
        title={Props.expenses[3].title}
        amount={Props.expenses[3].amount}
        date={Props.expenses[3].date}
      />
    </div>
  );
};

export default Expenses;
