//productreducer

import { combineReducers, createStore } from "redux";

//product constans
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";

//cart constans
const GET_CART_ITEMS = "GET_CART_ITEMS";
const ADD_CART_ITEM = "ADD_CART_ITEM";

//product state

const initialProductState = {
  prouducts: ["Alu", "Balu"],
  numberofProducts: 2,
};
//cart state

const initialCartState = {
  cart: ["Alu",],
  numberofProducts: 1,
};

//prouct action
const getProducts = () => {
  return {
    type: GET_PRODUCTS,
  };
};

const addProduct = (prouduct) => {
  return {
    type: ADD_PRODUCT,
    payload: prouduct,
  };
};

//cart action
const getCart = () => {
  return {
    type: GET_CART_ITEMS,
  };
};

const addCart = (prouduct) => {
  return {
    type: ADD_CART_ITEM,
    payload: prouduct,
  };
};

//product reducer
const productReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state };

    case ADD_PRODUCT:
      return {
        prouducts: [...state.prouducts, action.payload],
        numberofProducts: state.numberofProducts + 1,
      };

    default:
    return  state;
  }
};


//cart reducer
const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case GET_CART_ITEMS:
      return { ...state };

    case ADD_CART_ITEM:
      return {
        cart: [...state.cart, action.payload],
        numberofProducts: state.numberofProducts + 1,
      };

    default:
     return state;
  }
};

//root reducer

const rootReducer = combineReducers({
  productR: productReducer,
  cartR:cartReducer
})

//store

const store = createStore(rootReducer)

store.subscribe(()=>{
  console.log(store.getState())
})

store.dispatch(getProducts())
store.dispatch(addProduct("bagun"))
store.dispatch(getCart())
store.dispatch(addCart("bagun"))