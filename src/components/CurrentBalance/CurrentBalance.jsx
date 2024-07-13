import React from 'react';

function CurrentBalance({ balance }) {
  return (
    <div className='mt-40 h-auto w-auto border flex flex-col border-black rounded-xl'>
      <h2 className='text-center text-2xl'>Saldo Actual</h2>
      <p className='text-center text-7xl'>${balance} CLP.</p>
    </div>
  );
}

export default CurrentBalance;
