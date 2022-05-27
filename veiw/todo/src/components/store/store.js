import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
const { default: rootReducer } = require("./reducer/rootreducer");



const store = createStore(rootReducer ,{},applyMiddleware(thunk))
export default store