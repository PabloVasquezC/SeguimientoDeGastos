import React from 'react'
import expenseHistoryData from '../../Data/expenseHistoryData';
import ExpenseItem from '../ExpenseItem/ExpenseItem';

export const History = () => {
  return (
    <div className='border border-black shadow-lg rounded-md m-8 flex flex-col'>
			<div className='flex justify-around border border-black  border-b-2'>
				<span className='text-2xl'>Id</span>
				<span className='text-2xl'>Monto</span>
				<span className='text-2xl'>Fecha</span>
				<span className='text-2xl'>Descripción</span>
			</div>
			{expenseHistoryData.map((expense) => (
				<ExpenseItem id={expense.id} monto={expense.monto} fecha={expense.fecha} descripcion={expense.descripcion}/>
			))}
    </div>
  )
}


export default History;