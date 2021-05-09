import { SHOW_FIRST, SHOW_SECOND, SHOW_THIRD } from "../action/actionType";
function MainReducer(state = "", action) {
    switch (action.type) {
        case 'SHOW_FIRST':
            return "first"
        case 'SHOW_SECOND':
            return "second"
        case 'SHOW_THIRD':
            return "third"
        default:
            return state

    }
}
export default MainReducer