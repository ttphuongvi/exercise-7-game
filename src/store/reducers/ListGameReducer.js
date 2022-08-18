// reducers/noteReducers.js
import { SET_LIST_GAME, ADD_GAME, INIT_LIST_GAME } from "../const/index";

const ListGameReducer = (state = INIT_LIST_GAME, action) => {
  switch (action.type) {
    case SET_LIST_GAME:
      return { ...state, content: action.content };
    case ADD_GAME:
      localStorage.setItem(
        "listGame",
        JSON.stringify([action.content, ...state.content])
      );
      return { ...state, content: [action.content, ...state.content] };

    default:
      return state;
  }
};

export default ListGameReducer;
