import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import ConfirmationModal from '../ConfirmationModal/ConfirmationModal';

function FinanceItem({ id, monto, fecha, descripcion, tipo, onDelete }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const bgColor = tipo === 'ingreso' ? 'bg-green-400' : 'bg-red-400';

  const handleDelete = () => {
    onDelete(id);
    setModalOpen(false); 
  };

  const formatDateInSpanish = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Intl.DateTimeFormat('es-ES', options).format(new Date(date));
  };

  return (
    <>
      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={handleDelete}
      >
        ¿Estás seguro de querer eliminar este ítem?
      </ConfirmationModal>

      <div className={`flex justify-around items-center border ${bgColor} hover:h-10 cursor-pointer`}>
        <span className='w-1/3 text-center'>{formatDateInSpanish(fecha)}</span>
        <span className='w-1/3 text-center'>${monto} CLP.</span>
        <span className='w-1/3 text-center'>{descripcion}</span>
        <button className='mr-2' onClick={() => setModalOpen(true)}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </>
  );
}

export default FinanceItem;
