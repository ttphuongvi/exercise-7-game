import { LOGIN } from "../const/index";
export const Login = (user) => {
  return {
    type: LOGIN,
    user,
  };
};
