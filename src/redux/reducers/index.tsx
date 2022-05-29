import {combineReducers} from 'redux';
import contactReducer from "./contactReducer";
import userDetailsReducer from "./userDetailsReducer";

export default combineReducers({
    contactReducer,
    userDetailsReducer
});
