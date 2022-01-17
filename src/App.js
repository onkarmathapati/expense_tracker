import React from "react";
import "./App.css";
import ExpenseItem from "./components/ExpenseItems";

function app() {
  const expenses = [
    {
      id: "a1",
      title: "Car Insurance",
      amount: 294.64,
      date: new Date(2022, 6, 12),
    },
    {
      id: "a2",
      title: "Income Tax",
      amount: 411.94,
      date: new Date(2022, 7, 6),
    },
    {
      id: "a3",
      title: "Home Rent",
      amount: 123.74,
      date: new Date(2022, 4, 11),
    },
    { id: "a4", title: "Travel", amount: 200.44, date: new Date(2022, 13, 9) },
  ];

  return (
    <div>
      <h1 className="main_head">Expense Tracker</h1>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
      title={expenses[1].title}
      amount={expenses[1].amount}
      date={expenses[1].date}></ExpenseItem>
      <ExpenseItem
      title={expenses[2].title}
      amount={expenses[2].amount}
      date={expenses[2].date}></ExpenseItem>
      <ExpenseItem
      title={expenses[3].title}
      amount={expenses[3].amount}
      date={expenses[3].date}></ExpenseItem>
    </div>
  );
}

export default app;
