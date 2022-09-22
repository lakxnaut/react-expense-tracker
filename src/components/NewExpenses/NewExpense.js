import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {

    function saveExpenseDataHandler(expenses) {
        const expense = { ...expenses }
        // console.log(expense);


        props.onAddExpense(expense)

    }
    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    )
}

export default NewExpense