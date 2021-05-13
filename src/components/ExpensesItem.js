import "./ExpensesItem.css";
import ExpensesDate from './ExpensesDate.js'

function ExpensesItem(props) {
   

  return (
    <div className="expense-item">
            <ExpensesDate date={props.date} />
      <div className="expense-item-description">
        <h2>{props.title}</h2>
        <div className="expense-item-price">{props.amount}</div>
      </div>
    </div>
  );
}

export default ExpensesItem;