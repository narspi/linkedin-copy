import { useState } from "react";

import HeaderMenuElem from "./HeaderMenuElem";
import Avatar from "./Avatar";
import { Link } from "react-router-dom";

import { AiFillLinkedin } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { MdSupervisorAccount } from "react-icons/md";
import { MdBusinessCenter } from "react-icons/md";
import { MdOutlineChat } from "react-icons/md";
import { MdNotifications } from "react-icons/md";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");

  const changeSearchValue = (e) => {
    setSearchValue(e.target.value);
  };

  const clearSearchValue = () => {
    setSearchValue("");
  };

  return (
    <header className="border-b border-b-2 border-gray-200">
      <div className="container mx-auto p-2 flex items-center">
        <Link to="/">
          <AiFillLinkedin className="h-12 w-12 text-sky-800" />
        </Link>
        <label className="relative bg-gray-200 p-2 rounded-lg mx-6 flex items-center border border-2 focus-within:border-gray-600 cursor-pointer grow">
          <FiSearch className="w-4 h-4 text-gray-600" />
          <input
            type="search"
            placeholder="Поиск"
            value={searchValue}
            onChange={changeSearchValue}
            className="bg-gray-200 outline-none mx-2 cursor-pointer font-medium text-gray-600 no-cancel-button grow"
          />
          <button
            onClick={clearSearchValue}
            className="text-gray-600 hover:text-black outline-offset-2"
          >
            <IoMdClose className="w-4 h-4" />
          </button>
        </label>
        <div className="ml-auto flex items-cetner">
          <nav>
            <ul className="flex items-center space-x-3">
              <HeaderMenuElem title="Главная" icon={AiFillHome} />
              <HeaderMenuElem title="Сеть" icon={MdSupervisorAccount} />
              <HeaderMenuElem title="Работа" icon={MdBusinessCenter} />
              <HeaderMenuElem title="Общение" icon={MdOutlineChat} />
              <HeaderMenuElem title="Уведомления" icon={MdNotifications} />
            </ul>
          </nav>
          <Avatar nik={'Setner'} avatarImg={'/setner.jpg'} />
        </div>
      </div>
    </header>
  );
};

export default Header;
