import './App.css';

import Expenses from './components/Expenses/Expenses';

function App() {
 
  const expenses = [
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
  return (
    <div className="App">
      <header className="App-header">

        
          <Expenses items = {expenses}/>
      
        
      </header>
    </div>
  );
}

export default App;
