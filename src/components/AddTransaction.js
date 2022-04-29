import React, {useState} from 'react';

const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const onChangeText = (event) => {
    setText(event.target.value);
  }

  const onChangeAmount = (event) => {
    setAmount(event.target.value);
  }

  return(
    <div>
      <h3>Добавить новую транзакцию</h3>
      <form>
        <div className='from-control'>
          <label htmlFor='text'>Текст</label>
          <input type='text' value={text} onChange={onChangeText} placeholder='Введите текст...' />
        </div>
        <div className='from-control'>
          <label htmlFor='amount'>Сумма <br />(negative - expenses, positive - income)</label>
          <input type='number'  value={amount} onChange={onChangeAmount} placeholder='Введите сумму...' />
        </div>
        <button className='btn'>Добавить транзакцию</button>
      </form>
    </div>
  );
};

export default AddTransaction;
