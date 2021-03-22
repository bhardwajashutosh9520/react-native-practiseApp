import {call , put, takeEvery} from 'redux-saga/effects';
// importing firebase . 
import firebaseDb from '../../firebase/firebase'


function* getList(data) {
  yield put({
    type: 'GET_LIST_ASYNC',
    payload: data.payload,
  });
}

function* setCartData(data) {
  yield put({
    type: 'SET_CART_DATA_ASYNC',
    payload: data.payload,
  });
}


function* setFoodItems() {
  let list  =  [];
  firebaseDb.child('foodList').on('value' , snapshot => {
    if(snapshot.val()!== null) {
      list  = snapshot.val();
    }
  })
  yield put({
    type: 'SET_FOOD_ITEMS_ASYNC',
    payload: list['-MW-unCmKxw1PhCPh0zC'],
  });
}

function* setLoggedIn(data) {
  yield put({
    type: 'SET_LOGGED_IN_ASYNC',
    payload: data.payload,
  });
}

export function* updateList() {
  yield takeEvery('GET_LIST', getList);
}

export function* updateCartList() {
  yield takeEvery('SET_CART_DATA', setCartData);
}

export function* updateFoodItems() {
  yield takeEvery('SET_FOOD_ITEMS', setFoodItems);
}

export function* updateLoggedIn() {
  yield takeEvery('SET_LOGGED_iN', setLoggedIn);
}
