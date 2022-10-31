import { FC } from "react";
import { Header } from "../components/header/Header";
import { Menu } from "../components/menu/Menu";
import { News } from "../components/news/News";

export const Main: FC = () => {
  return (
    <div>
      <Header />
      <Menu />
      <News />
    </div>
  );
};
