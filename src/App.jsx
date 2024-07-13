import './App.css'
import CurrentBalance from './components/CurrentBalance/CurrentBalance'
import FinanceItemForm from './components/FinanceItemForm/FinanceItemForm'
import History from './components/History/History'
import { NavBar } from './components/NavBar/NavBar'
import { useState } from 'react'

function App() {
  const [balance, setBalance] = useState(4200000);

  const handleAddItem = (item) => {
    const monto = parseFloat(item.monto);
    if (item.tipo === 'ingreso') {
      setBalance(balance + monto);
    } else if (item.tipo === 'gasto') {
      setBalance(balance - monto);
    }
  };

  return (
    <div id='App' className='app-container'>
      <NavBar />
      <div className='content-container flex flex-col items-center'>
        <CurrentBalance balance={balance}/>
        <History onAddItem={handleAddItem} />
      </div>
    </div>
  )
}

export default App

