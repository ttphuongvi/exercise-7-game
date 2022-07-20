import Home from "../pages/Home";
import ListGame from "../pages/ListGame";
import Contact from "../pages/Contact";
const dataRoutes = [
  {
    name: "TRANG CHỦ",
    path: "/",
    exact: true,
    component: <Home />,
  },
  {
    name: "DANH SÁCH GAME",
    path: "/menu",
    // exact: false,
    component: <ListGame />,
  },
  {
    name: "LIÊN HỆ",
    path: "/contact",
    // exact: "false",
    component: <Contact />,
  },
];
export default dataRoutes;
