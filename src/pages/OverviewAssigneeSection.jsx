import React from "react";
import { TbPinned } from "react-icons/tb";
import dayjs from "dayjs";

import Assignees from "../components/Assignees";
import Overview from "../components/Overview";
import ToggleButton from "../components/ToggleButton";
import { DATE_FORMAT } from "../constants";

const OverviewAssigneeSection = () => {
  const date = dayjs(new Date()).format(DATE_FORMAT);

  const renderCreatedOn = () => {
    return (
      <div className="flex justify-between items-center gap-2 bg-white p-4 rounded-2xl text-slate-600 text-sm font-medium">
        <p className="">Created on</p>
        <p className="">{date}</p>
      </div>
    );
  };

  const renderPin = () => {
    return (
      <div className="flex items-center gap-1 bg-white p-4 rounded-2xl text-slate-600">
        <TbPinned className="text-lg" />
        <p className="flex-grow text-sm font-medium">Pinned</p>
        <ToggleButton />
      </div>
    );
  };

  return (
    <section className="border-r-[1px] p-6 flex flex-col gap-4 max-h-[84dvh] w-[408px] overflow-auto custom-scrollbar">
      {renderPin()}
      {renderCreatedOn()}
      <Assignees />
      <Overview />
    </section>
  );
};

export default OverviewAssigneeSection;
