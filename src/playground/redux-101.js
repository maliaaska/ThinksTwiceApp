import { createStore } from 'redux'

const store = createStore((state = { count: 0}, action) => {  // This is default value of state
  switch (action.type){
    case 'INCREMENT':
      const incrementBy = typeof action.incrementBy === "number" ? action.incrementBy : 1;
      return {
      count: state.count + incrementBy
    };
    case 'DECREMENT':
      const decrementBy = typeof action.decrementBy === "number" ? action.decrementBy : 1;
      return {
      count:state.count - decrementBy
    };
    case 'SET':
    return {
      count: 101
    }
    case 'RESET':
      return {
      count: state.count = 0
    };
    default: 
      return state;
  }
});

const unsubscribe = store.subscribe(() => {           // We pass a single function to it and this function gets called 
  console.log(store.getState());  //everysingle time the store changes
});
//Actions - that's an object that get sent to the store

//increment, decrement, reset - these are option we want to have
store.dispatch({
  type: 'INCREMENT',
  incrementBy: 5 // - we want to send it to the store
});

store.dispatch({
  type: 'INCREMENT',
});

store.dispatch({
  type: 'RESET',
});

store.dispatch({
  type: 'DECREMENT', 
  decrementBy: 10
});
store.dispatch({
  type: 'DECREMENT', 
  
});
store.dispatch({
  type: "SET",
  count: 101
})