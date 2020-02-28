const orderReducer = (state = {startingLoc: "", destination: ""}, action) => {
    if (action.type === 'setStartLoc') {
        return {
            ...state,
            startingLoc: action.startingLoc,
        }
    } else if (action.type === 'setDestination') {
        return {
            ...state,
            destination: action.destination,
        }
    } else if (action.type === 'setBoth') {
        return {
            ...state,
            startingLoc: action.bothLocs.startingLoc,
            destination: action.bothLocs.destination
        }
    }
    return state;
}

export default orderReducer;
