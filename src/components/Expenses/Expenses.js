import React, { useState } from 'react'
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter';

function yearSelectHandler(year) {
    console.log(year);
}

const Expenses = (props) => {
    const { expenses } = props;
    const [Dropyear, setDropYear] = useState('2019')

    function yearSelectHandler(year) {
        setDropYear(year);
        console.log(Dropyear);

    }

    return (
        <div>

            <Card className='expenses'>
                <ExpensesFilter selectedYear={Dropyear} onYearSelect={yearSelectHandler} />
                {expenses.map(item => <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} location={item.LocationOfExpenditure} />)}</Card>

        </div>

    )
}

export default Expenses