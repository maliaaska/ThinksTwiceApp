import {createStore, combineReducers } from 'redux';
import uuid from 'uuid';
//ADD_EXPENSE
const addExpense = (
  {
    description = '',
    note= '',
    amount = 0,
    createdAt = 0
  } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt

  }
})

//REMOVE_EXPENSE

const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
})
//EDIT_EXPENSE
//SET_TEXT_FILTER
//SORT_BY_DATE
//SORT-BY-AMOUNT
//SET_START_DATE
//SET_END_DATE

//Expenses Reducer
const expensesReducerDefaultState = []
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state, 
        action.expense
      ];
      case 'REMOVE_EXPENSE':
        return state.filter(({ id }) => id !== action.id);
    default:
      return state
  }
};
//Filter Reducer

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}; 
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    default: 
      return state
  }
};

//Store creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  console.log(store.getState());
});

const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 100}));
const expenseTwo = store.dispatch(addExpense({description: 'Cofee', amount: 5}));

store.dispatch(removeExpense({ id: expenseOne.expense.id }))


console.log(expenseOne);


const demoState = {
  expenses: [{
    id: 'asdfghghjk',
    description: "January Rent",
    note: "This was a rental gor that address",
    amount: 54000,
    createAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount',  //date or amount
    startDate: undefined,
    endDate: undefined
  }
};