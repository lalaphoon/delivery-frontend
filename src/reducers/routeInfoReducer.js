const routeInfoReducer = (state = {route_id: "", route: []}, action) => {
    if(action.type === 'select'){
        return {
            route_id: action.selected
        }
    } else if (action.type === 'setRoute') {
        return {
            ...state,
            route: action.selectedRoute
        }
    } else if (action.type === 'setRouteInfo') {
        return {
            ...state,
            route_id: action.routeInfo.route_id,
            route: action.routeInfo.route
        }
    }
    return state;
}

export default routeInfoReducer;