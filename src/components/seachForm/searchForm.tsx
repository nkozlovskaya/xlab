import { FC } from "react";
import "./searchForm.sass";

interface SearchAddressProps {
  value: string;
  updateText: (str: string) => void;
  handleAction: () => void;
}

export const SearchAddressForm: FC<SearchAddressProps> = ({
  value,
  updateText,
  handleAction,
}) => {
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()} className="position_search">
        <input
          type="text"
          value={value}
          placeholder="Введите интересующий вас адрес"
          className="input"
          onChange={(e) => updateText(e.target.value)}
        />
        <button className="button" onClick={handleAction}>
          <div className="button_logo">
            <img
              src="../../../img/search_logo.svg"
              alt="Search"
              className="btn_img"
            />
            <h1 className="btn_h">Поиск</h1>
          </div>
        </button>
      </form>
    </div>
  );
};
