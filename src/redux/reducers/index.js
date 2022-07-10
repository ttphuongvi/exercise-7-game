import ListGameReducer from "./ListGameReducer";
import UserReducer from "./UserReducer";

import { combineReducers } from "redux";

export const reducers = combineReducers({
  listGame: ListGameReducer,
  user: UserReducer,
});
