import React from 'react'
import HistoryData from '../../Data/HistoryData';
import FinanceItem from '../FinanceItem/FinanceItem';

export const History = () => {
  return (
    <div className='border border-black shadow-lg rounded-md m-8 flex flex-col'>
			<div className='flex justify-around border border-black  border-b-2'>
				<span className='text-2xl'>Id</span>
				<span className='text-2xl'>Monto</span>
				<span className='text-2xl'>Fecha</span>
				<span className='text-2xl'>Descripción</span>
			</div>
			{HistoryData.map((item) => (
				<FinanceItem id={item.id} monto={item.monto} fecha={item.fecha} descripcion={item.descripcion} tipo={item.tipo}/>
			))}
    </div>
  )
}


export default History;