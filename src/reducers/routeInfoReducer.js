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
    }
    return state;
}

export default routeInfoReducer;