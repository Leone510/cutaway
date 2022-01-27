import { combineReducers, createStore, applyMiddleware } from "redux";
import { cutawayReducer } from "./cutaway/cutawayReducer";

const rootReducer = combineReducers({
   cutaway: cutawayReducer,
})

export const store = createStore(rootReducer);