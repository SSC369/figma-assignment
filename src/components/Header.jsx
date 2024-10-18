import React, { useContext } from "react";
import { FiRefreshCw } from "react-icons/fi";
import { FaRocket } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { RxLink2 } from "react-icons/rx";
import { IoIosCall } from "react-icons/io";
import { FaRegFileLines } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";
import { v4 } from "uuid";
import whatsappIcon from "../assets/whatsapp.png";

import { UserContext } from "../context/userContext";
import { HEADER_OPTIONS } from "../constants";

const Header = () => {
  const { headerData, fetchData } = useContext(UserContext);
  const { name, leadId, stage } = headerData;

  let logo = "";
  const splitName = name.split(" ");
  splitName.forEach((word) => {
    logo += word[0];
  });

  const stageColor = stage.color;

  const renderIcon = (option) => {
    switch (option) {
      case HEADER_OPTIONS.call:
        return <IoIosCall className="text-xl" color="#1570EF" />;
      case HEADER_OPTIONS.remarks:
        return <FaRegFileLines className="text-lg" color="#1570EF" />;
      case HEADER_OPTIONS.send:
        return <IoIosSend className="text-xl" color="#1570EF" />;
      case HEADER_OPTIONS.whatsapp:
        return <img className="h-4" src={whatsappIcon} />;
      default:
        break;
    }
  };

  const handleRefresh = () => {
    fetchData();
  };

  const options = Object.keys(HEADER_OPTIONS);
  return (
    <header className="fixed w-full bg-white z-50 px-20 py-4 border-b-[1px]">
      <div className="flex items-center w-full justify-between">
        <div className="flex items-center gap-2">
          <FaRocket color="#0086C9" className=" text-xl" />
          <p className="flex-grow-1 text-sm font-medium">Academy CGA</p>
        </div>

        <div className="flex items-center gap-5 text-lg absolute right-6 top-4">
          <button onClick={handleRefresh}>
            <FiRefreshCw />
          </button>
          <IoClose />
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            className="rounded-full p-2 font-semibold"
            style={{ backgroundColor: "#D1E9FF", color: "#1570EF" }}
          >
            {logo}
          </div>
          <h1 className="font-semibold text-xl">{name}</h1>

          <div
            className="flex items-center gap-1 p-1 rounded-xl px-2 text-white"
            style={{ backgroundColor: `${stageColor}` }}
          >
            <p className=" text-xs">{stage.name}</p>
            <FaChevronDown className="text-xs ml-1" />
          </div>
        </div>

        <div className="flex flex-col">
          <div className="text-blue-600 flex items-center gap-2 self-end">
            <RxLink2 className="text-xl" />
            <p className="font-semibold text-sm">Copy Link</p>
          </div>

          <ul className="flex items-center justify-between mt-2 gap-3">
            {options.map((option) => {
              return (
                <li
                  style={
                    option === HEADER_OPTIONS.whatsapp
                      ? { backgroundColor: "#ECFDF3" }
                      : { backgroundColor: "#EFF8FF" }
                  }
                  className="flex items-center gap-2 p-2 px-4 rounded-xl"
                  key={v4()}
                >
                  {renderIcon(option)}
                  <p
                    style={
                      option === HEADER_OPTIONS.whatsapp
                        ? { color: "#039855" }
                        : { color: "#1570EF" }
                    }
                    className="first-letter:capitalize font-medium text-sm"
                  >
                    {option}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
