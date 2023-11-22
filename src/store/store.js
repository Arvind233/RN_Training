import {createStore} from 'redux';
import todoReducer from '../reducers/TODOReducer';

const store = createStore(todoReducer);
export default store;
