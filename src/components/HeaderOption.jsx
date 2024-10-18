import React from "react";
import { IoIosCall, IoIosSend } from "react-icons/io";
import { FaRegFileLines } from "react-icons/fa6";

import { HEADER_OPTIONS } from "../constants";
import whatsappIcon from "../assets/whatsapp.png";
import { success } from "../utils/toastUtils";

const HeaderOption = ({ option }) => {
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

  const handleClick = () => {
    success("Yet to be added");
  };

  return (
    <li
      onClick={handleClick}
      style={
        option === HEADER_OPTIONS.whatsapp
          ? { backgroundColor: "#ECFDF3" }
          : { backgroundColor: "#EFF8FF" }
      }
      className="flex items-center gap-2 p-2 px-4 rounded-xl"
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
};

export default HeaderOption;
