import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ExpenseItemForm from './components/ExpenseItemForm/ExpenseItemForm'
import ExpenseHistory from './components/ExpenseHistory/ExpenseHistory'
import { NavBar } from './components/NavBar/NavBar'


function App() {

  return (
    <>
      <NavBar />
      <ExpenseItemForm />
      <ExpenseHistory />
    </>
  )
}

export default App
