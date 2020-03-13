const orderReducer = (state = {startingLoc: "", destination: "", weight: 0.0, deliverType: "", price: 0.0, distance: 0.0, usageTime: 0.0, markers:[]}, action) => {
    if (action.type === 'setStartLoc') {
        return {
            ...state,
            startingLoc: action.startingLoc.startingLoc,
            markers: action.startingLoc.markers
        }
    } else if (action.type === 'setDestination') {
        return {
            ...state,
            destination: action.destination.destination,
            markers: action.destination.markers
        }
    } else if (action.type === 'setWeight') {
        return {
            ...state,
            weight: action.weight,
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
    } else if (action.type === 'setMarkers') {
        return {
            ...state,
            markers: action.markers
        }
    } else if (action.type === 'setDeliverType') {
        return {
            ...state,
            deliverType: action.deliverType
        }
    }
    return state;
}

export default orderReducer;
