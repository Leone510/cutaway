import { combineReducers, createStore} from "redux";
import { cutawayReducer } from "./cutaway/cutawayReducer";

const rootReducer = combineReducers({
   cutaway: cutawayReducer,
})

export const store = createStore(rootReducer);