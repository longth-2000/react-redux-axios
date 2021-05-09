import {combineReducers} from 'redux'
import modalEvent from './modalEvent'
const CombineReducer = combineReducers(
    {
        modal:modalEvent,
    }
)
export default CombineReducer