import React from 'react';
import HistoryData from '../../Data/HistoryData';
import FinanceItem from '../FinanceItem/FinanceItem';

export const History = () => {
  // Ordenar los datos por fecha usando el formato 'MM/DD/YYYY'
  const sortedData = HistoryData.sort((b, a) => new Date(a.fecha) - new Date(b.fecha));

  return (
    <div className='border border-black shadow-lg rounded-md m-8 flex flex-col w-auto'>
      <div className='flex justify-around border border-black  border-b-2'>
        <span className='w-1/3 text-2xl text-center'>Fecha</span>
        <span className='w-1/3 text-2xl text-center'>Monto</span>
        <span className='w-1/3 text-2xl text-center'>Descripción</span>
      </div>
      {sortedData.map((item) => (
        <FinanceItem
          key={item.id} // Asegúrate de usar una clave única para cada elemento
          id={item.id}
          monto={item.monto}
          fecha={item.fecha}
          descripcion={item.descripcion}
          tipo={item.tipo}
        />
		
      ))}
    </div>
  );
}

export default History;
