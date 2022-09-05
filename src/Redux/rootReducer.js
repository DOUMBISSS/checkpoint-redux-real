import { combineReducers } from "redux";
import { taskReducer } from './listReducer';


export const rootReducer = combineReducers({
    taskReducer : taskReducer,
}) 