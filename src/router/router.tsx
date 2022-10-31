import { Main } from "../pages/Main";
import { Search } from "../pages/Search";

export const router = [
  {
    path: "/",
    link: "/",
    element: <Main />,
  },

  {
    path: "/address",
    link: "/address",
    element: <Search />,
  },
];
