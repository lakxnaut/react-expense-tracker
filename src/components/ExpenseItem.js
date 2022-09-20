import React from 'react'
import Card from './Card';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import './ExpenseItem.css'

const ExpenseItem = (props) => {

    const { title, amount, location, date } = props;



    return (
        <Card className='expense-item'>

            <ExpenseDate date={date} />
            <ExpenseDetails title={title} amount={amount} />
            <div className='location'>{location}</div>
            <button>Delete Expense</button>
        </Card>
    )
}

export default ExpenseItem