import { Ex01 } from "../components/ex01";
import { Home } from "../components/Home";
import { Ex31 } from "../components/Ex31";

export const PageRoutes = [
  {
    path: "/",
    name: "Home",
    exact: true,
    children: <Home />,
  },
  {
    path: "/ex01",
    name: "Ex01",
    exact: false,
    children: <Ex01 />,
  },
  {
    path: "/ex31",
    name: "Ex31",
    exact: false,
    children: <Ex31 />,
  },
];
