import ListGameReducer from "./ListGameReducer";
import { combineReducers } from "redux";

export const reducers = combineReducers({
  listGame: ListGameReducer,
});
