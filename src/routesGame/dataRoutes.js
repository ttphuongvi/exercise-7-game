import Home from "../pages/Home";
import ListGame from "../pages/ListGame";
import Contact from "../pages/Contact";
const dataRoutes = [
  {
    name: "Trang chủ",
    path: "/",

    component: <Home />,
  },
  {
    name: "Danh sách game",
    path: "/menu",

    component: <ListGame />,
  },
  {
    name: "Liên hệ",
    path: "/contact",
    component: <Contact />,
  },
];
export default dataRoutes;
