import { EDIT_GAME } from "../const/index";
export const SetListGame = (game) => {
  return {
    type: EDIT_GAME,
    game,
  };
};
