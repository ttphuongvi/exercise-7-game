// reducers/noteReducers.js
import {
  SET_LIST_GAME,
  ADD_GAME,
  INIT_LIST_GAME,
  EDIT_GAME,
  REMOVE_GAME,
} from "../const/index";

const ListGameReducer = (state = INIT_LIST_GAME, action) => {
  switch (action.type) {
    case SET_LIST_GAME:
      return { ...state, content: action.content };

    case ADD_GAME:
      const new_game = [action.content, ...state.content];
      localStorage.setItem("listGame", JSON.stringify(new_game));
      return { ...state, content: new_game };

    case REMOVE_GAME:
      const new_list_game = state.content.filter((item) => {
        return item.id !== action.id;
      });
      localStorage.setItem("listGame", JSON.stringify(new_list_game));
      return { ...state, content: new_list_game };

    case EDIT_GAME:
      const new_list_game_edit = state.content.map((item) => {
        if (item.id !== action.item.id) {
          return item;
        }

        return { ...item, ...action.item };
      });

      localStorage.setItem("listGame", JSON.stringify(new_list_game_edit));
      return { ...state, content: new_list_game_edit };
    // localStorage.setItem("listGame", JSON.stringify(action.content));
    // return { ...state, content: action.content, ...state.content };
    default:
      return state;
  }
};

export default ListGameReducer;
