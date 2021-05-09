import { createStore } from 'redux';
import CombineReducer from "../reducer/index";
const initialState={
    isVisible:false
}
export const store = createStore(CombineReducer, initialState)