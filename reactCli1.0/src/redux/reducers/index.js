import {combineReducers} from 'redux';
import { reducer as loginReducer } from '../actions/postActions';

export default combineReducers({
  loginState: loginReducer,
})