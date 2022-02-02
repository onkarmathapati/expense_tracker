import React from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpenses = (props) => {

  const onSaveExpenseDataHandler = (enteredExpenseData) => {
            const expenseData = {
                ...enteredExpenseData,
                id: Math.random().toString()

            };
            props.onAddExpense(expenseData);
  }

  return (
    <div className="Newexpenses">
      <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
    </div>
  );
};

export default NewExpenses;
