import { combineReducers } from "redux";
import ticketsReducer from './tickets';

const rootReducer = combineReducers({ ticketsReducer });

export default rootReducer;