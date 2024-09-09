import { applyMiddleware,  createStore } from "redux";
import logger from 'redux-logger'
// product constants
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";

// product state
const initialProductState = {
  products: ["Alu", "Balu"],
  numberofProducts: 2,
};

// product actions
const getProducts = () => {
  return {
    type: GET_PRODUCTS,
  };
};

const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};

// product reducer
const productReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state };

    case ADD_PRODUCT:
      console.log('✌️state --->', {...state});
      return {
        
        products: [],
        numberofProducts: state.numberofProducts + 1,
      };

    default:
      return state;
  }
};

// store
const store = createStore(productReducer, initialProductState, applyMiddleware(logger));

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(getProducts());
store.dispatch(addProduct("bagun"));
