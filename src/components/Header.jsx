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
import { getLogo } from "../utils/leadUtils";

const Header = () => {
  const { headerData, fetchData } = useContext(UserContext);
  const { name, leadId, stage } = headerData;

  const logo = getLogo(name);
  const stageColor = stage.color;
  const options = Object.keys(HEADER_OPTIONS);

  const handleRefresh = () => {
    fetchData();
  };

  const renderHeaderOptions = () => {
    return (
      <ul className="flex items-center justify-between mt-2 gap-3">
        {options.map((option) => {
          const optionData = HEADER_OPTIONS[option];
          return <HeaderOption key={v4()} option={optionData} />;
        })}
      </ul>
    );
  };

  const renderProfile = () => {
    return (
      <div className="flex items-center gap-3">
        <div className="rounded-full p-2 font-semibold bg-sky text-sky">
          {logo}
        </div>
        <h1 className="font-semibold text-xl">{name}</h1>
        <div
          className="flex items-center gap-1 p-1 rounded-xl px-2 text-white"
          style={{ backgroundColor: `${stage.bgColor}` }}
        >
          <p style={{ color: stage.color }} className="text-xs font-medium">
            {stage.name}
          </p>
          <FaChevronDown
            style={{ color: stage.color }}
            className="text-xs ml-1"
          />
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

  return (
    <header className="fixed w-full bg-white z-50 px-20 py-4 border-b-[1px]">
      {renderHeader()}
      <div className="mt-3 flex items-center justify-between">
        {renderProfile()}

        <div className="flex flex-col">
          <button
            onClick={handleClickCopyLink}
            className="text-sky flex items-center gap-2 self-end"
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
