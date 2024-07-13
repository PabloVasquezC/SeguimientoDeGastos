import React from 'react';

function ConfirmationModal({ isOpen, onClose, onConfirm, children }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <div className="mb-4">{children}</div>
        <button onClick={onConfirm} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
          Confirmar
        </button>
        <button onClick={onClose} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
          Cancelar
        </button>
      </div>
    </div>
  );
}

export default ConfirmationModal;
