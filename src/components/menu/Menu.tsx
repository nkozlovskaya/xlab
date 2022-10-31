import { FC, useState } from "react";
import "./Menu.sass";

export const Menu: FC = () => {
  const [active, setActive] = useState(true);
  return (
    <div className="menu ">
      <h1 className="menu__header">Меню</h1>
      <ul>
        <li>
          <img src="./../../../img/ic_главная.svg" alt="Main" />
          <a href="/">Главная</a>
        </li>
        <li>
          <img src="./../../../img/Search.svg" alt="Search" />
          <a href="/address">Поиск адресов</a>
        </li>
        <li>
          <img src="./../../../img/vs_tables.svg" alt="Tables" />
          <a href="/">Таблицы</a>
        </li>
        <li>
          <img src="./../../../img/Calendar.svg" alt="Main" />
          <a href="/">Календарь</a>
        </li>
        <li>
          <img src="./../../../img/Map.svg" alt="Map" />
          <a href="/">Карты</a>
        </li>
        <li>
          <img src="./../../../img/Widgets.svg" alt="Widgets" />
          <a href="/">Виджеты</a>
        </li>

        <li>
          <img src="./../../../img/Settings.svg" alt="Settings" />
          <a href="/">Настройки</a>

          <img
            src="./../../../img/dropdown.svg"
            alt="dropdown"
            className="settings_img "
            onClick={() => setActive((active) => !active)}
          />
        </li>

        {active && (
          <div className={`dropdown ${active ? "active" : ""}`}>
            <div className="dropdown-content">
              <div className="dropdown_li">
                <img src="./../../../img/Person.svg" alt="Person" />
                <a href="/" className="dropdown_a">
                  Настройки профиля
                </a>
              </div>
              <div className="dropdown_li">
                <img
                  src="./../../../img/Control_finance.svg"
                  alt="Control_finance"
                />
                <a href="/" className="dropdown_a">
                  Управление финансами
                </a>
              </div>
            </div>
          </div>
        )}

        <li>
          <img src="./../../../img/Exit.svg" alt="Exit" />
          <a href="/">Выход</a>
        </li>
      </ul>
    </div>
  );
};
