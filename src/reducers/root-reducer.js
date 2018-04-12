import { combineReducers } from 'redux';
import houses from './addHousesReducer';
import swornMembers from './addSwornMembersReducer';

const rootReducer = combineReducers({
  houses,
  swornMembers
});

export default rootReducer;
