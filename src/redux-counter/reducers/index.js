import {combineReducers} from 'redux'
import counterReducer from './incrementReducer'
const CombineReducer = combineReducers(
    {
        counter:counterReducer,
    }
)
export default CombineReducer