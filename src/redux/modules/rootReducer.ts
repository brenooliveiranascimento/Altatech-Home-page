import { combineReducers } from 'redux';
import { interfaceData } from './interfaceData';
import { userData } from './userdata';

export const rootReducer = combineReducers({
  interfaceData,
  userData,
});
