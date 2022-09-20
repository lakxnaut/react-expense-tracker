import React, { useState } from 'react'
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import './ExpenseItem.css'

const ExpenseItem = (props) => {

    const { title, amount, location, date } = props;

    const [expense, setExpense] = useState(amount);



    function expenseHandler() {
        setExpense('100$')
    }


    return (
        <Card className='expense-item'>

            <ExpenseDate date={date} />
            <ExpenseDetails title={title} amount={expense} />
            <div className='location'>{location}</div>
            <button onClick={expenseHandler}>Delete Expense</button>
        </Card>
    )
}

export default ExpenseItem