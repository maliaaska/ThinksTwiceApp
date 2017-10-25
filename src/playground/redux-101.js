import { createStore } from 'redux'

const store = createStore((state = { count: 0}, action) => {  // This is default value of state
  switch (action.type){
    case 'INCREMENT':
    return {
      count: state.count + 1
    };
    case 'DECREMENT':
    return {
      count:state.count -1
    };
    case 'RESET':
    return {
      count: state.count = 0
    };
    default: 
    return state;
  }
});

console.log(store.getState());

//Actions - that's an object that get sent to the store

//increment, decrement, reset - these are option we want to have
store.dispatch({
  type: 'INCREMENT', // - we want to send it to the store
});

store.dispatch({
  type: 'INCREMENT', // - we want to send it to the store
});

store.dispatch({
  type: 'RESET',
});

store.dispatch({
  type: 'DECREMENT', // - we want to send it to the store
});



console.log(store.getState());