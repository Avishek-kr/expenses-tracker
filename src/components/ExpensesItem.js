import "./ExpensesItem.css";
import ExpensesDate from './ExpensesDate.js'
import Card from './Card'
import React,{useState} from "react";

function ExpensesItem(props) {
  const [title, setTitle] = useState(props.title)
  
  const clickHandler=()=>{
    setTitle('Updated')
  }

  return (
    <Card className='expense-item'>
            <ExpensesDate date={props.date} />
      <div className='expense-item-description'>
        <h2>{title}</h2>
        <div className='expense-item-price'>{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
}

export default ExpensesItem;