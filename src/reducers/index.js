import counterReducer from "./counterReducer";
import distributionLocationReducer from "./distributionLocationReducer";
import orderReducer from "./orderReducer";

import {combineReducers} from "redux";

export default combineReducers({
    counterReducer,
    distributionLocationReducer,
    orderReducer
} );
