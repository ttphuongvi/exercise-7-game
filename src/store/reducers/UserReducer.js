import { LOGIN, LOGOUT } from "../const/index";

const UserReducer = (state = { content: { isLogin: false } }, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, content: { ...action.content, isLogin: true } };
    case LOGOUT:
      return { ...state, content: { isLogin: false } };
    default:
      return state;
  }
};

export default UserReducer;
