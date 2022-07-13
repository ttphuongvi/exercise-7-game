import Home from "../pages/Home/index";
import ListGame from "../pages/ListGame/index";
import Contact from "../pages/Contact/index";
const dataRoutes = [
  {
    name: "TRANG CHỦ",
    path: "/",
    exact: "true",
    component: <Home />,
  },
  {
    name: "DANH SÁCH GAME",
    path: "/menu",
    exact: "false",
    component: <ListGame />,
  },
  {
    name: "LIÊN HỆ",
    path: "/contact",
    exact: "false",
    component: <Contact />,
  },
];
export default dataRoutes;
