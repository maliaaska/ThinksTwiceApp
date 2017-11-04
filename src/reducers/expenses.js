import { createStore, combineReducers } from 'redux';

import addExpense from "../actions/expenses";


//Expenses Reducer
const expensesReducerDefaultState = []
export default (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state, 
        action.expense
      ];
      case 'REMOVE_EXPENSE':
        return state.filter(({ id }) => id !== action.id);
      case 'EDIT-EXPENSE':
        return state.map((expense) => {
          if(expense.id === action.id) {
           return { 
            ...expense,
            ...action.updates
           }
          } else {
            return expense;  
          };
        });
    default:
      return state
  }
};
