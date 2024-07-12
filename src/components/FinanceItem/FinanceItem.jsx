import React from 'react';

function FinanceItem({ id, monto, fecha, descripcion, tipo }) {
  console.log(tipo);
  const bgColor = tipo === 'ingreso' ? 'bg-blue-300' : 'bg-red-300';
  return (
    <div className={`flex justify-around border ${bgColor}`}>
        <span>{id}</span>
        <span>{monto}</span>
        <span>{fecha}</span>
        <span>{descripcion}</span>
    </div>
  );
}

export default FinanceItem;
