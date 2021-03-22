// constant variables
export const GET_LIST_ASYNC = 'GET_LIST_ASYNC';
export const SET_CART_DATA_ASYNC = 'SET_CART_DATA_ASYNC';
export const SET_FOOD_ITEMS_ASYNC = 'SET_FOOD_ITEMS_ASYNC';
export const SET_LOGGED_IN_ASYNC = 'SET_LOGGED_IN_ASYNC';

// importing firebase . 
import firebaseDb from '../../firebase/firebase'


// actions

export function loadList(data) {
  return {
    type: 'GET_LIST',
    payload: data,
  };
}

// update the data of cart.
export function setCartData(data) {
  return {
    type: 'SET_CART_DATA',
    payload: data,
  };
}

// set the food items.
export function setFoodItems(data) {
  return {
    type: 'SET_FOOD_ITEMS',
    payload: data,
  };
}

// se loggedin value
export function setLoggedIn(data) {
  return {
    type: 'SET_LOGGED_iN',
    payload: data,
  };
}

// initialize states
const initialState = {
  id: 101,
  name: 'Ashutosh Bhardwaj',
  menuList: [],
  foodItems: [],
  cartData: [],
  loggedIn: false,
};

/* switching actions */
const ACTION_HANDLERS = {
  [GET_LIST_ASYNC]: (state, action) => {
    return {
      ...state,
      menuList: action.payload,
    };
  },
  [SET_CART_DATA_ASYNC]: (state, action) => {
    return {
      ...state,
      cartData: action.payload,
    };
  },
  [SET_FOOD_ITEMS_ASYNC]: (state, action) => {
    console.log("in async set food list0-----" , action)
    return {
      ...state,
      foodItems: action.payload,
    };
  },
  [SET_LOGGED_IN_ASYNC]: (state, action) => {
    return {
      ...state,
      loggedIn: action.payload,
    };
  },
};

// reducer
export default function userReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
