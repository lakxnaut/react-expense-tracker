import React from 'react'
import './ExpenseItem.css'

const ExpenseItem = (props) => {

    const { title, amount, location, date } = props;

    const expenseDate = date;
    const expenseTitle = title;
    const expenseAmount = amount;
    const LocationOfExpenditure = location

    return (
        <div className='expense-item'>

            <div>{expenseDate.toISOString()}</div>
            <div className='expense-item__description'>
                <h2>{expenseTitle}</h2>
                <div className='expense-item__price'>{expenseAmount}</div>
            </div>
            <div className='location'>{LocationOfExpenditure}</div>
        </div>
    )
}

export default ExpenseItem