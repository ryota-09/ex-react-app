import { Ex01 } from "../components/ex01"
import { Home } from "../components/Home"

export const PageRoutes = [
  {
    path: "/",
    name: "Home",
    exact: true,
    children: <Home />
  },
  {
    path: "/ex01",
    name: "Ex01",
    exact: false,
    children: <Ex01 />
  },
]
