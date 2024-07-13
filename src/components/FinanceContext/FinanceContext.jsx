import React, { createContext, useState, useEffect } from 'react';

// Crear el contexto
export const FinanceContext = createContext();

// Proveedor del contexto
export const FinanceProvider = ({ children }) => {
  const [balance, setBalance] = useState(() => {
    // Intentar recuperar el balance desde LocalStorage o usar un valor predeterminado
    const localBalance = localStorage.getItem('balance');
    return localBalance ? parseFloat(localBalance) : 4200000; // Puedes ajustar el valor predeterminado según sea necesario
  });

  const [items, setItems] = useState(() => {
    // Intentar recuperar los ítems desde LocalStorage o usar datos predeterminados
    const localItems = localStorage.getItem('items');
    return localItems ? JSON.parse(localItems) : [];
  });

  useEffect(() => {
    // Almacenar el balance en LocalStorage
    localStorage.setItem('balance', balance.toString());
  }, [balance]);

  useEffect(() => {
    // Almacenar los ítems en LocalStorage
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  return (
    <FinanceContext.Provider value={{ balance, setBalance, items, setItems }}>
      {children}
    </FinanceContext.Provider>
  );
};
