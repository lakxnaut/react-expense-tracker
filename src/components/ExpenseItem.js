import React from 'react'
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import './ExpenseItem.css'

const ExpenseItem = (props) => {

    const { title, amount, location, date } = props;



    return (
        <div className='expense-item'>

            <ExpenseDate date={date} />
            <ExpenseDetails title={title} amount={amount} />
            <div className='location'>{location}</div>
        </div>
    )
}

export default ExpenseItem