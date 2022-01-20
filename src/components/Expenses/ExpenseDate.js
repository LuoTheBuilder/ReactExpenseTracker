import "./ExpenseDate.css";
const ExpenseDate = (Props) => {
  const month = Props.date.toLocaleString("en-US", { month: "short" });
  const day = Props.date.toLocaleString("en-US", { day: "numeric" });
  const year = Props.date.toLocaleString("en-US", { year: "numeric" });
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
};

export default ExpenseDate;
