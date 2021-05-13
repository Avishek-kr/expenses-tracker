import "./ExpensesItem.css";

function ExpensesItem(props) {
  return (
    <div className="expense-item">
      <div>{props.date.toISOString}</div>
      <div className="expense-item-description">
        <h2>{props.title}</h2>
        <div className="expense-item-price">{props.amount}</div>
      </div>
    </div>
  );
}

export default ExpensesItem;