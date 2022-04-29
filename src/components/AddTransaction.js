import React, {useState, useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

const AddTransaction = () => {
  const {addTransaction} = useContext(GlobalContext);
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const onChangeText = (event) => {
    setText(event.target.value);
  }

  const onChangeAmount = (event) => {
    setAmount(event.target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 1000000),
      text,
      amount: +amount,
    }

    addTransaction(newTransaction);
  }

  return(
    <div>
      <h3>Добавить новую транзакцию</h3>
      <form onSubmit={onSubmit}>
        <div className='from-control'>
          <label htmlFor='text'>Текст</label>
          <input type='text' value={text} onChange={onChangeText} placeholder='Введите текст...' />
        </div>
        <div className='from-control'>
          <label htmlFor='amount'>Сумма</label>
          <input type='number'  value={amount} onChange={onChangeAmount} placeholder='Введите сумму...' />
        </div>
        <button className='btn'>Добавить транзакцию</button>
      </form>
    </div>
  );
};

export default AddTransaction;
