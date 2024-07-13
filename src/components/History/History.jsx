import React, { useState } from 'react';
import FinanceItem from '../FinanceItem/FinanceItem';
import FinanceItemForm from '../FinanceItemForm/FinanceItemForm';
import  HistoryData  from '../../Data/HistoryData';

export const History = ({ onAddItem }) => {
  const [items, setItems] = useState(HistoryData);

  const handleDelete = (id) => {
    const updatedItems = items.filter(item => item.id !== id);
    setItems(updatedItems);
  };

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
    onAddItem(newItem); // Notificar a App.js sobre el nuevo item
  };

  const sortedData = items.sort((b, a) => new Date(a.fecha) - new Date(b.fecha));

  return (
    <div className='m-6 flex flex-col w-1/2 items-center'>
      <FinanceItemForm onAddItem={handleAddItem} />
      <div className='w-full'>
        <div className='shadow-lg rounded-md flex justify-around border border-black border-b-2'>
          <span className='w-1/3 text-2xl text-center'>Fecha</span>
          <span className='w-1/3 text-2xl text-center'>Monto</span>
          <span className='w-1/3 text-2xl text-center'>Descripción</span>
        </div>
        {sortedData.map((item) => (
          <FinanceItem
            key={item.id}
            id={item.id}
            monto={item.monto}
            fecha={item.fecha}
            descripcion={item.descripcion}
            tipo={item.tipo}
            onDelete={handleDelete} 
          />
        ))}
      </div>
    </div>
  );
}

export default History;
