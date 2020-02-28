import counterReducer from "./counterReducer";
import distributionLocationReducer from "./distributionLocationReducer";
import orderReducer from "./orderReducer";
import routeInfoReducer from "./routeInfoReducer"

import {combineReducers} from "redux";

export default combineReducers({
    counterReducer,
    distributionLocationReducer,
    orderReducer,
    routeInfoReducer
} );
