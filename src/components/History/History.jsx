import React, { useState } from 'react';
import FinanceItem from '../FinanceItem/FinanceItem';
import FinanceItemForm from '../FinanceItemForm/FinanceItemForm';
import HistoryData from '../../Data/HistoryData';
import HistoryChart from '../HistoryChart.jsx/HistoryChart';

export const History = ({ onAddItem }) => {
  const [items, setItems] = useState(HistoryData);
  const [sortOrder, setSortOrder] = useState('fecha');
  const [filterType, setFilterType] = useState('all');

  const handleDelete = (id) => {
    const updatedItems = items.filter(item => item.id !== id);
    setItems(updatedItems);
  };

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
    onAddItem(newItem); 
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilterType(e.target.value);
  };

  const sortedData = items
    .filter(item => filterType === 'all' || item.tipo === filterType)
    .sort((a, b) => {
      if (sortOrder === 'monto') {
        return b.monto - a.monto;
      }
      return new Date(b.fecha) - new Date(a.fecha);
    });

  return (
    <div className='m-6 flex flex-col w-1/2 items-center'>
      <div className='flex justify-center'>
        <FinanceItemForm onAddItem={handleAddItem} />
        <HistoryChart historyData={items} />
      </div>
      <div className='flex justify-around w-full mb-4'>
        <div>
          <label htmlFor="sortOrder">Ordenar por: </label>
          <select id="sortOrder" value={sortOrder} onChange={handleSortChange}>
            <option value="fecha">Fecha</option>
            <option value="monto">Monto</option>
          </select>
        </div>
        <div>
          <label htmlFor="filterType">Filtrar por: </label>
          <select id="filterType" value={filterType} onChange={handleFilterChange}>
            <option value="all">Todos</option>
            <option value="ingreso">Ingresos</option>
            <option value="gasto">Gastos</option>
          </select>
        </div>
      </div>
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
