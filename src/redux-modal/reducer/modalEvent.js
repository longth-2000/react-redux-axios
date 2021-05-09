function modalEvent(state = false, action) {
    switch (action.type) {
        case "SHOW_MODAL":
            return true;
        default:
            return state;
    }
}
export default modalEvent;