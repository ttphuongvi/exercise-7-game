import Home from "../pages/Home";
import ListGame from "../pages/ListGame";
import Contact from "../pages/Contact";
import IconHome from "../Atomic/atoms/AtomIconHomeOutlined";
import IconListGame from "../Atomic/atoms/AtomIconSportsEsportsOutlined";
import IconContact from "../Atomic/atoms/AtomIconPermContactCalendarOutlined";

const dataRoutes = [
  {
    icon: <IconHome />,
    name: "Trang chủ",
    path: "/",

    component: <Home />,
  },
  {
    icon: <IconListGame />,
    name: "Danh sách game",
    path: "/menu",

    component: <ListGame />,
  },
  {
    icon: <IconContact />,
    name: "Liên hệ",
    path: "/contact",
    component: <Contact />,
  },
];
export default dataRoutes;
