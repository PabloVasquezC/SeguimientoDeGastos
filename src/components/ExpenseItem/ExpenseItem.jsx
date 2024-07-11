import React from 'react'

function ExpenseItem({id, monto, fecha, descripcion}) {
  return (
    <div className='flex justify-around border'>
        <span >{id}</span>
        <span>{monto}</span>
        <span>{fecha}</span>
        <span>{descripcion}</span>
    </div>
  )
}

export default ExpenseItem