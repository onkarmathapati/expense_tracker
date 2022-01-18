import React from "react";


function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div style={{ fontSize: "30px", display: "flex" }}>
      <div>{month}-</div>
      <div>{year}-</div>
      <div>{day}</div>
    </div>
  );
}

export default ExpenseDate;
