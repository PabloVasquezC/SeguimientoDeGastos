import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ExpenseItemForm from './components/ExpenseItemForm/ExpenseItemForm'
import History from './components/History/History'
import { NavBar } from './components/NavBar/NavBar'


function App() {

  return (
    <>
      {/* <NavBar /> */}
      <ExpenseItemForm />
      <History />
    </>
  )
}

export default App
