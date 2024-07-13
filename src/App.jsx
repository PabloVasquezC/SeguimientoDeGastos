import './App.css'
import CurrentBalance from './components/CurrentBalance/CurrentBalance'
import FinanceItemForm from './components/FinanceItemForm/FinanceItemForm'
import History from './components/History/History'
import { NavBar } from './components/NavBar/NavBar'

function App() {

  

  return (
    <div className='app-container'>
      <NavBar />
      <div className='content-container flex flex-col items-center'>
        <CurrentBalance />
        <History />
      </div>
    </div>
  )
}

export default App
