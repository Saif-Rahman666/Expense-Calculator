import './App.css';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';
import {useState} from 'react'

const DUMMY_EXPENSES = [
  {
    id: 's1',
    title: 'Bazar',
    amount: 250.94,
    date: new Date(2022,0,23)
  },
  {
    id: 's2',
    title: 'Transportation',
    amount: 50.00,
    date: new Date(2022,1,10)
  },
  {
    id: 's3',
    title: 'Gym',
    amount: 3000,
    date: new Date()
  }
]

const App =() =>  {
 
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)


  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses =>{
      return [expense, ...prevExpenses]
    })
  }
  return (
    <div className="App">
        <NewExpense onAddExpense={addExpenseHandler}/>
        <Expenses items = {expenses}/>
   
    </div>
  );
}

export default App;
