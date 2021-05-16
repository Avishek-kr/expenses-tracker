import "./ExpensesItem.css";
import ExpensesDate from './ExpensesDate.js'
import Card from './Card'

function ExpensesItem(props) {
  return (
    <Card className='expense-item'>
            <ExpensesDate date={props.date} />
      <div className='expense-item-description'>
        <h2>{props.title}</h2>
        <div className='expense-item-price'>{props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpensesItem;