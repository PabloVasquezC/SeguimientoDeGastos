// Componente padre History
import React from 'react';
import HistoryData from '../../Data/HistoryData';
import FinanceItem from '../FinanceItem/FinanceItem';
import { useState } from 'react';

export const History = () => {
  const [items, setItems] = useState(HistoryData);

  const handleDelete = (id) => {
    const updatedItems = items.filter(item => item.id !== id);
    setItems(updatedItems);
  };

  const sortedData = items.sort((b, a) => new Date(a.fecha) - new Date(b.fecha)); // Cambiado de HistoryData a items

  return (
    <div className='border border-black shadow-lg rounded-md m-8 flex flex-col w-auto'>
      <div className='flex justify-around border border-black border-b-2'>
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
          onDelete={handleDelete} 
        />
      ))}
    </div>
  );
}

export default History;
