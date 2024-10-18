import React, { useContext } from "react";
import {
  FiRefreshCw,
  FaChevronDown,
  FaRocket,
  IoClose,
  RxLink2,
} from "../Icons";
import { v4 } from "uuid";

import { UserContext } from "../context/userContext";
import { HEADER_OPTIONS } from "../constants";
import { success } from "../utils/toastUtils";
import HeaderOption from "./HeaderOption";

const Header = () => {
  const { headerData, fetchData } = useContext(UserContext);
  const { name, leadId, stage } = headerData;

  let logo = "";
  const splitName = name.split(" ");
  splitName.forEach((word) => {
    logo += word[0];
  });

  const stageColor = stage.color;

  const handleRefresh = () => {
    fetchData();
  };

  const renderHeaderOptions = () => {
    return (
      <ul className="flex items-center justify-between mt-2 gap-3">
        {options.map((option) => {
          return <HeaderOption key={v4()} option={option} />;
        })}
      </ul>
    );
  };

  const renderProfile = () => {
    return (
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
    );
  };

  const handleClose = () => {
    success("Yet to be added");
  };

  const handleClickCopyLink = () => {
    success("Yet to be added");
  };

  const renderHeader = () => {
    return (
      <div className="flex items-center w-full justify-between">
        <div className="flex items-center gap-2">
          <FaRocket color="#0086C9" className=" text-xl" />
          <p className="flex-grow-1 text-sm font-medium">Academy CGA</p>
        </div>

        <div className="flex items-center gap-5 text-lg absolute right-6 top-4">
          <button onClick={handleRefresh}>
            <FiRefreshCw />
          </button>

          <button onClick={handleClose}>
            <IoClose />
          </button>
        </div>
      </div>
    );
  };

  const options = Object.keys(HEADER_OPTIONS);
  return (
    <header className="fixed w-full bg-white z-50 px-20 py-4 border-b-[1px]">
      {renderHeader()}
      <div className="mt-3 flex items-center justify-between">
        {renderProfile()}

        <div className="flex flex-col">
          <button
            onClick={handleClickCopyLink}
            className="text-blue-600 flex items-center gap-2 self-end"
          >
            <RxLink2 className="text-xl" />
            <p className="font-semibold text-sm">Copy Link</p>
          </button>
          {renderHeaderOptions()}
        </div>
      </div>
    </header>
  );
};

export default Header;
