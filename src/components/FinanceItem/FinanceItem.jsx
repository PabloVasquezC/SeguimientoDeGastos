import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function FinanceItem({ id, monto, fecha, descripcion, tipo, onDelete }) {
  const bgColor = tipo === 'ingreso' ? 'bg-blue-300' : 'bg-red-300';
  return (
    <div className={`flex justify-around items-center border ${bgColor} hover:h-10 cursor-pointer`}>
      <span className='w-1/3 text-center'>{fecha}</span>
      <span className='w-1/3 text-center'>${monto} CLP.</span>
      <span className='w-1/3 text-center'>{descripcion}</span>
      <button onClick={() => onDelete(id)}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
}

export default FinanceItem;
