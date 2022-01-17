import React from "react";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
     <div style={{padding:"20px"}}>
      <div className="expense-item">
        <div style={{fontSize: "30px"}}>{props.date.toISOString()}</div>
        <div className="expense-item_description">
          <div className="expense_name">{props.title}</div>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </div>
      </div>
    
  );
}

export default ExpenseItem;
