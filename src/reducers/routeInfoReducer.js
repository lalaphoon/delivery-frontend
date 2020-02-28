const routeInfoReducer = (state = {route_id: ""}, action) => {
    if(action.type === 'select'){
        return {
            route_id: action.selected
        }
    }
    return state;
}

export default routeInfoReducer;