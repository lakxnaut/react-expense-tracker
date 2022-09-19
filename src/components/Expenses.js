import React from 'react'
import ExpenseItem from './ExpenseItem';
import './Expenses.css'

const Expenses = (props) => {
    const { expenses } = props;

    return (
        <div className='expenses'>
            {expenses.map(item => <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} location={item.LocationOfExpenditure} />)}</div>
    )
}

export default Expenses