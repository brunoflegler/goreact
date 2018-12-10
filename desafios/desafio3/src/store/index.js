import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddlaware from 'redux-saga';
import reducers from './ducks';
import sagas from './sagas';
import toastMiddleware from '../middlewares/toast';

const middlewares = [];

const sagaMonitor = process.env.NODE_ENV === 'development' ? console.tron.createSagaMonitor() : null;

const sagaMiddleware = createSagaMiddlaware({ sagaMonitor });

middlewares.push(sagaMiddleware);
middlewares.push(toastMiddleware);

const createAppropriateStore = process.env.NODE_ENV === 'development' ? console.tron.createStore : createStore;

const store = createAppropriateStore(reducers, compose(applyMiddleware(...middlewares)));

sagaMiddleware.run(sagas);

export default store;
