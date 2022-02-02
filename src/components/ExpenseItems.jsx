import React, { useState} from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

   
const ExpenseItem = (props) => {



 
  return (
    <div style={{ padding: "20px" }}>
      <div className="expense-item">
       {/* <ExpenseDate date={props.date} /> */}
        <div className="expense-item_description">
          <div className="expense_name">{props.title} </div>
          <div className="expense-item__price"> ${props.amount}</div>
        </div>
      </div> 
    </div>
  );
}

export default ExpenseItem;
