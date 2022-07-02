import { SET_LIST_GAME } from "../const/index";
export const SetListGame = (listGame) => {
  return {
    type: SET_LIST_GAME,
    listGame,
  };
};
