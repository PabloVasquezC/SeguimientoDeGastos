import './App.css'
import FinanceItemForm from './components/FinanceItemForm/FinanceItemForm'
import History from './components/History/History'
import { NavBar } from './components/NavBar/NavBar'


function App() {

  return (
    <>
      <NavBar />
      <FinanceItemForm />
      <History />
    </>
  )
}

export default App
