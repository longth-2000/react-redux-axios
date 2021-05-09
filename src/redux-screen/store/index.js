import { createStore } from "redux";
import CombineReducer from "../reducer/index"
const initialState ={
    screen : ""
}
export const store =  createStore(CombineReducer,initialState)