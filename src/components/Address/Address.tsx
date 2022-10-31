import { FC } from "react";
import { IAddress } from "../../types/addressType";
import "./Address.sass";

interface AddressProps {
  addresses: IAddress[];
}

export const Address: FC<AddressProps> = ({ addresses }) => {
  return (
    <div className="list">
      <h1 className="list_h">Адреса</h1>
      <ul>
        {addresses?.map((address, i) => (
          <li key={i}>{address.value}</li>
        ))}
      </ul>
      {  !addresses.length && (
        <p className="list_error">Не удалось найти адреса</p>
      ) } 
  </div>
  );
};
