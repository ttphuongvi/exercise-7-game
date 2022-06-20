export const LOAD_CURR_ITEM = "LOAD_CURR_ITEM";
export const loadCurrentItem = (item) => {
  return {
    type: LOAD_CURR_ITEM,
    payload: item,
  };
};
