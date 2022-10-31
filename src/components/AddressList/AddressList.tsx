import { FC, useEffect, useState } from "react";
import "./AddressList.sass";
import { Loader } from "../loader/Loader";
import { useActions } from "../../hooks/useActions";
import { SearchAddressForm } from "../seachForm/searchForm";
import { useAppSelector } from "../../hooks/redux_hooks";
import { Address } from "../Address/Address";

export const AddressList: FC = () => {
  const [text, setText] = useState("");

  const { searchAddress } = useActions();

  const { addresses, loading, error } = useAppSelector(
    (state) => state.address
  );

  const handleSearchAddress = () => {
    if (text.length < 3) {
      setText("");
    } else {
      searchAddress(text);
      setText("");
    }
  };

  useEffect(() => {
    searchAddress(text);
    //eslint-disable-next-line
  }, []);

  return (
    <div>
      <div className="position">
        <h1 className="title">Поиск адресов</h1>
        <h3 className="subtitle">Введите интересующий вас адрес</h3>
        <SearchAddressForm
          value={text}
          updateText={setText}
          handleAction={handleSearchAddress}
        />
      </div>
      {loading ? <Loader /> : <Address addresses={addresses} />}
      {error && (
        <div className="alert alert-danger" role="alert">
          Произошла ошибка! {error}
        </div>
      )}
    </div>
  );
};
