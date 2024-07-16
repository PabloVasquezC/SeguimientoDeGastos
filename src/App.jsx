import './App.css';
import CurrentBalance from './components/CurrentBalance/CurrentBalance';
import History from './components/History/History';
import { NavBar } from './components/NavBar/NavBar';
import { useState, useEffect } from 'react';

function App() {
  const [balance, setBalance] = useState(() => {
    // Cargar el balance desde localStorage o establecer un valor inicial
    const savedBalance = localStorage.getItem('currentBalance');
    return savedBalance !== null ? parseFloat(savedBalance) : 4200000;
  });

  useEffect(() => {
    // Guardar el balance en localStorage cuando este cambie
    localStorage.setItem('currentBalance', balance.toString());
  }, [balance]);

  const handleAddItem = (item) => {
    const monto = parseFloat(item.monto);
    if (item.tipo === 'ingreso') {
      setBalance(prev => prev + monto);
    } else if (item.tipo === 'gasto') {
      setBalance(prev => prev - monto);
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

export default App;
