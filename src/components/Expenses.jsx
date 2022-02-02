import React, { useState } from "react";
import ExpenseItem from "./ExpenseItems";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  // const [filteredYear, setFilteredYear] = useState("2022");

  // const filterChangeHandler = (selectedYear) => {
  //   setFilteredYear(selectedYear);
  // };

  return (
    <div
      style={{
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginLeft: "20%",
      }}
    >

      {props.items.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          // date={expense.date}
        />
      ))}
    </div>
  );
};

export default Expenses;
