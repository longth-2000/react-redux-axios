import {combineReducers} from 'redux'
import MainReducer from "./MainReducer"
const CombineReducer = combineReducers({
    screen:MainReducer
})
export default CombineReducer
