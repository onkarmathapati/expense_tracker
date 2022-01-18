import React from "react";
import "./App.css";
import Expenses from "./components/Expenses";


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
      <Expenses items={expenses}/>
    </div>
  );
}

export default app;
