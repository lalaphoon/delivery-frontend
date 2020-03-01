const orderReducer = (state = {startingLoc: "", destination: "", weight: 0.0, price: 0.0, distance: 0.0, usageTime: 0.0}, action) => {
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
            destination: action.bothLocs.destination,
            weight: action.bothLocs.weight

        }
    } else if (action.type === 'setDistance') {
        return {
            ...state,
            distance: action.distance
        }

    } else if (action.type === 'setPrice') {
        return {
            ...state,
            price: action.price
        }
    } else if (action.type === 'setUsageTime') {
        return {
            ...state,
            usageTime: action.usageTime
        }
    }
    return state;
}

export default orderReducer;
