import React from "react";

const AddExpenseButton = (Props) => {
  const clickAdd = () => {
    Props.onClickAdd(true);
  };
  return <button onClick={clickAdd}>Add Item</button>;
};

export default AddExpenseButton;
