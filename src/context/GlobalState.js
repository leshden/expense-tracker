import {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

const initialState = {
  transactions : [
    {id: 1, text: 'Чай', amount: -100},
    {id: 2, text: 'Зарплата', amount: 2100},
    {id: 3, text: 'Книга', amount: -350},
    {id: 4, text: 'Аванс', amount: 500},
  ]
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalProvider value={{
      transactions: state.transactions
    }}>
      {children}
    </GlobalProvider>
  );
}
