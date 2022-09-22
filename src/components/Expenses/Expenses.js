import React, { useState } from 'react'
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css'
import ExpensesChart from './ExpensesChart';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

// function yearSelectHandler(year) {
//     console.log(year);
// }

const Expenses = (props) => {
    const { expenses } = props;
    const [Dropyear, setDropYear] = useState('2019')

    function yearSelectHandler(year) {
        setDropYear(year);
        console.log(Dropyear);

    }

    // const values = expenses.filter(Value => Value.date.getFullYear().toString() === Dropyear)
    // console.log(values);

    const filteredExpenses = expenses.filter(Value => Value.date.getFullYear().toString() === Dropyear)

    return (
        <div>

            <Card className='expenses'>
                <ExpensesFilter selectedYear={Dropyear} onYearSelect={yearSelectHandler} />
                <ExpensesChart expenses={filteredExpenses} />

                <ExpensesList item={filteredExpenses} />





            </Card>



        </div>

    )
}

export default Expenses