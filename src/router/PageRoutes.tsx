import { Ex01 } from "../components/ex01";
import { Home } from "../components/Home";
import { Ex31 } from "../components/Ex31";
import { Ex50 } from "../components/Ex50";
import { Ex60 } from "../components/Ex60";
import { Ex70 } from "../components/Ex70";
import { Ex80 } from "../components/Ex80";
import { Ex190 } from "../components/Ex190";
import { Ex215 } from "../components/Ex215";
import { Ex300 } from "../components/Ex300";
import { Exbeginner01 } from "../components/Exbeginner01";

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
  {
    path: "/ex50",
    name: "Ex50",
    exact: false,
    children: <Ex50 />,
  },
  {
    path: "/ex60",
    name: "Ex60",
    exact: false,
    children: <Ex60 />,
  },
  {
    path: "/ex70",
    name: "Ex70",
    exact: false,
    children: <Ex70 />,
  },
  {
    path: "/ex80",
    name: "Ex80",
    exact: false,
    children: <Ex80 />,
  },
  {
    path: "/ex190",
    name: "Ex190",
    exact: false,
    children: <Ex190 />,
  },
  {
    path: "/ex215",
    name: "Ex215",
    exact: false,
    children: <Ex215 />,
  },
  {
    path: "/ex300",
    name: "Ex300",
    exact: false,
    children: <Ex300 />,
  },
  {
    path: "/exbeginner01",
    name: "Ex-beginner01",
    exact: false,
    children: <Exbeginner01 />,
  },
];
