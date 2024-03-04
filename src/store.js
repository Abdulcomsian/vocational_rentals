"use client";
import { thunk } from "redux-thunk";

const { createStore, combineReducers, applyMiddleware } = require("redux");
// const {
//   default: catagoriesReducer,
//   getCatagories,
// } = require("./app/Sidebar/catagoriesSlice");
import catagoriesReducer, {
  getCatagories,
} from "./app/Sidebar/catagoriesSlice";

const rootReducer = combineReducers({
  catagories: catagoriesReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
