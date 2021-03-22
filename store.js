import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {reducer} from './models';
import {
  updateList,
  updateCartList,
  updateFoodItems,
  updateLoggedIn,
} from './models/user/sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(updateList);
sagaMiddleware.run(updateCartList);
sagaMiddleware.run(updateFoodItems);
sagaMiddleware.run(updateLoggedIn);

export {store};
