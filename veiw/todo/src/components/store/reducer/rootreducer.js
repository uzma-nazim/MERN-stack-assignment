import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import { signupReducer } from "./signUpreducer";

const rootReducer = combineReducers({
    signupReducer,
    loginReducer,

})

export default rootReducer