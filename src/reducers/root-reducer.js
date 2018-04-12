import { combineReducers } from 'redux';
import houses from './addHousesReducer';

const rootReducer = combineReducers({
  houses
});

export default rootReducer;
