import { createStore } from "redux";

const INCREMENT = "INCREMENT";
const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

const initialState = {
  count: 0,
};

//action
const incrementCounterAction = () => {
  return { type: INCREMENT };
};
const incrementCounterByValue = (value) => {
  return { type: INCREMENT_BY_VALUE, payload: value };
};

const decrementCounterAction = () => {
  return { type: DECREMENT };
};
const ressetAction = () => {
  return { type: RESET };
};

//reducer

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };

    case RESET:
      return {
        ...state,
        count: 0,
      };
    case INCREMENT_BY_VALUE:
      return {
        ...state,
        count: state.count + action.payload,
      };

    default:
      state;
  }
};

const store = createStore(counterReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCounterAction());
store.dispatch(incrementCounterAction());
store.dispatch(decrementCounterAction());
store.dispatch(incrementCounterAction());
store.dispatch(incrementCounterAction());
store.dispatch(incrementCounterByValue(5));
store.dispatch(ressetAction());
const ADD_USERS = "ADD_USERS"
const userInitialState = { 
  users: ["sajiz"], 
  count: 1 
};

const addUsers =(user)=>{
  return {type:ADD_USERS, payload:user}
}

const userReducer = (state=userInitialState,action)=>{
  switch (action.type) {
    case ADD_USERS:
      return{
        users:[...state.users, action.payload],
        count: state.count + 1
      }

  
    default:
      state;
  }
}

const userStore = createStore(userReducer)

userStore.subscribe(()=>{
  console.log(userStore.getState())
})

userStore.dispatch(addUsers("rajib"))