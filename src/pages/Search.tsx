import { FC } from "react";
import { Header } from "../components/header/Header";
import { AddressList } from "../components/AddressList/AddressList";
import { Menu } from "../components/menu/Menu";

export const Search: FC = () => {
  return (
    <div>
      <Header />
      <Menu />
      <AddressList />
    </div>
  );
};
