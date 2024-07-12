import React, { useState } from 'react';

export const FinanceItemForm = ({ onAddItem }) => {
  const [monto, setMonto] = useState('');
  const [fecha, setFecha] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [tipo, setTipo] = useState('gasto'); // Puedes cambiarlo según tu necesidad

  const handleSubmit = (e) => {
    e.preventDefault();

    // Ajuste para asegurar que la fecha sea correcta
    const dateParts = fecha.split("-");
    const adjustedDate = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]); // Meses en JavaScript empiezan desde 0

    const newItem = {
      id: Date.now().toString(),
      monto,
      fecha: adjustedDate.toISOString(), // Almacena la fecha como ISO string
      descripcion,
      tipo,
    };
    onAddItem(newItem);
    setMonto('');
    setFecha('');
    setDescripcion('');
    setTipo('gasto');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-80 h-auto p-4 m-4 rounded-xl shadow-black shadow-lg"
    >
      <h3 className="text-2xl font-semibold">Añadir Nuevo Gasto</h3>
      {/* Monto */}
      <div className="flex justify-between m-2">
        <label htmlFor="monto" className="text-2xl">
          Monto:
        </label>
        <input
          className="bg-blue-200 w-40 rounded border border-black"
          type="number"
          name="monto"
          id="monto"
          value={monto}
          onChange={(e) => setMonto(e.target.value)}
        />
      </div>
      <hr />
      {/* Fecha */}
      <div className="flex justify-between m-2">
        <label htmlFor="fecha" className="text-2xl">
          Fecha:
        </label>
        <input
          className="bg-blue-200 w-40 rounded border border-black"
          type="date"
          name="fecha"
          id="fecha"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
        />
      </div>
      <hr />
      <div className="flex justify-between m-2">
        <label htmlFor="tipo" className="text-2xl">
          Tipo:
        </label>
        <select
          className="bg-blue-200 w-40 rounded border border-black"
          name="tipo"
          id="tipo"
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
        >
          <option value="ingreso">Ingreso</option>
          <option value="gasto">Gasto</option>
        </select>
      </div>
      {/* Descripción */}
      <div className="flex justify-between flex-col m-2">
        <label htmlFor="descripcion" className="text-2xl">
          Descripción:
        </label>
        <textarea
          rows={5}
          className="bg-blue-200 rounded border border-black"
          name="descripcion"
          id="descripcion"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
      </div>
      
      <button
        type="submit"
        className="bg-blue-500 text-white rounded p-2 mt-4"
      >
        Añadir
      </button>
    </form>
  );
};

export default FinanceItemForm;
