import { ADD_GAME } from "../const/index";
export const SetListGame = (game) => {
  return {
    type: ADD_GAME,
    game,
  };
};
