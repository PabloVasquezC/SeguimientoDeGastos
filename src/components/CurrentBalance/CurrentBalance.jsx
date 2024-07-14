import React from 'react';

function CurrentBalance({ balance }) {
  return (
    <div className='mt-20 h-auto w-auto  flex flex-col  rounded-xl'>
      <h2 className='text-center text-gray-100 text-2xl'>Saldo Actual</h2>
      <p className='text-center text-white text-8xl'>${balance} CLP.</p>
    </div>
  );
}

export default CurrentBalance;
