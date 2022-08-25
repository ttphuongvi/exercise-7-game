import Home from "../pages/Home";
import ListGame from "../pages/ListGame";
import Contact from "../pages/Contact";
import IconHome from "../Atomic/atoms/AtomIconHomeOutlined";
import IconListGame from "../Atomic/atoms/AtomIconSportsEsportsOutlined";
import IconContact from "../Atomic/atoms/AtomIconPermContactCalendarOutlined";

const dataRoutes = [
  {
    path: "/*",
    element: <Home />,
  },
  {
    path: "menu/*",
    element: <ListGame />,
  },
  {
    icon: <IconContact />,
    path: "contact",
    element: <Contact />,
  },
];

const menuAppBar = [
  {
    name: "Trang chủ",
    path: "/",
    icon: <IconHome />,
  },
  {
    icon: <IconListGame />,
    name: "Danh sách game",
    path: "/menu",
  },
  {
    icon: <IconContact />,
    name: "Liên hệ",
    path: "/contact",
  },
];

export { dataRoutes, menuAppBar };
