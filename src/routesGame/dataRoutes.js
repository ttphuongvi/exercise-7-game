import Home from "../pages/Home";
import ListGame from "../pages/ListGame";
import Contact from "../pages/Contact";
const dataRoutes = [
  {
    name: "Trang chủ",
    path: "/",
    exact: true,
    component: <Home />,
    hashLink: [
      {
        name: "Slider",
        href: "#slider",
      },
      {
        name: "Game mới nhất",
        href: "#new-game",
      },
    ],
  },
  {
    name: "Danh sách game",
    path: "/menu",
    // exact: false,
    component: <ListGame />,
    hashLink: [
      {
        name: "Danh sách game",
        href: "#list-game",
      },
    ],
  },
  {
    name: "Liên hệ",
    path: "/contact",
    // exact: "false",
    component: <Contact />,
    hashLink: [
      {
        name: "Form Liên hệ",
        href: "#form-contact",
      },
    ],
  },
];
export default dataRoutes;
