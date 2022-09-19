import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses";

function App() {

  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
      LocationOfExpenditure: 'laxmi nagar'
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12), LocationOfExpenditure: 'pandav nagar' },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
      LocationOfExpenditure: 'mayur vihar'
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
      LocationOfExpenditure: 'vasant kunj'
    },
  ];


  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenses={expenses} />


    </div>
  );
}

export default App;
