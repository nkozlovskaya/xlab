import { FC } from "react";
import "./Header.sass";

export const Header: FC = () => {
  return (
    <div className="header">
      <div className="header_logo">
        <img
          src="./../../img/wrench.svg"
          alt="wrench"
          className="header_wrench"
        />
        <img
          src="./../../img/Wrench CRM.svg"
          alt="Wrench CRM"
          className="header_wrenchCRM"
        />
      </div>
      <div className="header_icName">
        <img
          src="./../../img/ic_person.svg"
          alt="ic_person"
          className="header_icPerson"
        />
        <img
          src="./../../img/name_surname.svg"
          alt="name_surname"
          className="header_nameSurname"
        />
      </div>
    </div>
  );
};
