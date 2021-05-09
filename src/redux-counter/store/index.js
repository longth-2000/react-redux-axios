import { createStore } from 'redux';
import CombineReducer from "../reducers/index";
const initialState = {
    count:0
}
export const store = createStore(CombineReducer, initialState)