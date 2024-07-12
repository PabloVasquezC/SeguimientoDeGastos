import React from 'react';

function FinanceItem({ id, monto, fecha, descripcion, tipo }) {
  console.log(tipo);
  const bgColor = tipo === 'ingreso' ? 'bg-blue-300' : 'bg-red-300';
  return (
    <div className={`flex justify-around border ${bgColor} hover:h-10 cursor-pointer`}>
        <span className='w-1/4 text-center'>{fecha}</span>
        <span className='w-1/4 text-center'>${monto} CLP.</span>
        <span className='w-1/4 text-center'>{descripcion}</span>
    </div>
  );
}

export default FinanceItem;
