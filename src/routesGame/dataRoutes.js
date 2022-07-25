import Home from "../pages/Home";
import ListGame from "../pages/ListGame";
import Contact from "../pages/Contact";
const dataRoutes = [
  {
    name: "Trang chủ",
    path: "/",
    exact: true,
    component: <Home />,
  },
  {
    name: "Danh sách game",
    path: "/menu",
    // exact: false,
    component: <ListGame />,
  },
  {
    name: "Liên hệ",
    path: "/contact",
    // exact: "false",
    component: <Contact />,
  },
];
export default dataRoutes;
