import counterReducer from "./counterReducer";
import distributionLocationReducer from "./distributionLocationReducer";

import {combineReducers} from "redux";

export default combineReducers({
    counterReducer,
    distributionLocationReducer
} );
