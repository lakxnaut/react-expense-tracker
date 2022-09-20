import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = () => {
    const [enteredtitle, setEnteredtitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    function titleHandler(e) {
        setEnteredtitle(e.target.value)

    }

    function amountHandler(e) {
        setEnteredAmount(e.target.value)

    }

    function dateHandler(e) {
        setEnteredDate(e.target.value);

    }


    function submitHandler(e) {
        e.preventDefault();

        const expenseData = {
            title: enteredtitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        console.log(expenseData);

    }





    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={enteredtitle} onChange={titleHandler} />

                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' value={enteredAmount} onChange={amountHandler} />

                </div>

                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' step='2022-12-31' value={enteredDate} onChange={dateHandler} />

                </div>

            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm