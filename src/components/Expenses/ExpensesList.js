import './ExpensesList.css'

import React from 'react'
import ExpenseItem from './ExpenseItem'

const ExpensesList = (props) => {

    if (props.item.length === 0) {
        return <h2 className='expenses-list__fallback'>NO content found</h2>
    }
    console.log(props.item[0].title);
    if (props.item.length === 1) {
        return (
            <div>
                {<ExpenseItem key={props.item[0].id} title={props.item[0].title} amount={props.item[0].amount} date={props.item[0].date} location={props.item[0].LocationOfExpenditure} />}
                <h2 className='expenses-list__fallback'>Please Add more content</h2>
            </div>
        )
    }

    return (
        <ul className='expenses-list'>


            {props.item.map(item => <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} location={item.LocationOfExpenditure} />)}

        </ul>
    )



}

export default ExpensesList