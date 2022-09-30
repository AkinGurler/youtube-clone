
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk"
import { videoReducer } from "./reducers/videos";


const store=createStore(videoReducer,applyMiddleware(thunk))
export default store;