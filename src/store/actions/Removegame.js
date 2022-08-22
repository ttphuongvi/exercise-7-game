import { REMOVE_GAME } from "../const/index";
export const SetListGame = (game) => {
  return {
    type: REMOVE_GAME,
    game,
  };
};
