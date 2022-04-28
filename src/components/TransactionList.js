import React from 'react';

const TransactionList = () => {
  return(
    <div>
      <h3>История</h3>
      <ul className='list'>
        <li className='minus'>
          Наличные <span>-₽500</span><button className='delete-btn'>x</button>
        </li>
      </ul>
    </div>
  );
};

export default TransactionList;
