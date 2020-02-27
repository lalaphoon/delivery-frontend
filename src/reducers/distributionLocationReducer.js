const distributionLocationReducer = (state = [], action) => {
    if (action.type === 'set') {
        return {
            //locations: Array.from(new Set([...state.locations, {name : action.newDistributionLocation}])),
            locations: action.newDistributionLocation,
        }
    }
    return state;
}

export default distributionLocationReducer;
