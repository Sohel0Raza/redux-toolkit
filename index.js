import axios from "axios";
import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

//constes
const GET_TODO_REQUEST = "GET_TODO_REQUEST";
const GET_TODO_SUCCESS = "GET_TODO_SUCCESS";
const GET_TODO_FAILED = "GET_TODO_FAILED";
const API_URL = "https://jsonplaceholder.typicode.com/todos";
//state
const initialState = {
  todos: [],
  isLodaing: false,
  error: null,
};

// actions
const getTodosRequest = () => {
  return {
    type: GET_TODO_REQUEST,
  };
};
const getTodosFaild = (error) => {
  return {
    type: GET_TODO_FAILED,
    payload: error,
  };
};
const getTodosSuccess = (todos) => {
  return {
    type: GET_TODO_SUCCESS,
    payload: todos,
  };
};

// reducer

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODO_REQUEST:
      return {
        ...state,
        isLodaing: true,
      };

    case GET_TODO_SUCCESS:
      return {
        ...state,
        isLodaing: false,
        todos: action.payload,
      };

    case GET_TODO_FAILED:
      return {
        ...state,
        isLodaing: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
// async action creator
const fatchData = () => {
  return (dispatch) => {
    dispatch(getTodosRequest());
    axios
      .get(API_URL)
      .then((res) => {
        const todos = res.data
        const titles = todos.map(todo => todo.title)
        dispatch(getTodosSuccess(titles));
        console.log("hhhh")
      })
      .catch((error) => dispatch(getTodosFaild(error.message)));
  };
};

// store

const store = createStore(todosReducer, applyMiddleware(thunk));

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(fatchData());
