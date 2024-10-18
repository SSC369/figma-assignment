import React, { useContext, useState } from "react";
import { v4 } from "uuid";
import { FaChevronDown, FaChevronUp } from "../Icons";

import { OVERVIEW_SHOW_LIMIT } from "../constants";
import { UserContext } from "../context/userContext";
import Field from "./Field";

const Overview = () => {
  const [overviewShowLimit, setOverViewShowLimit] =
    useState(OVERVIEW_SHOW_LIMIT);
  const { overviewFields } = useContext(UserContext);

  let overviewLimitData;
  if (overviewFields.length > overviewShowLimit) {
    overviewLimitData = overviewFields.slice(0, OVERVIEW_SHOW_LIMIT);
  } else {
    overviewLimitData = overviewFields;
  }

  const renderOverviewFields = () => {
    return (
      <ul className="flex flex-col gap-4 ">
        {overviewLimitData.map((field) => {
          const { name, value, fieldType } = field;
          return (
            <li
              className="flex items-center text-sm border-b-[1px] last:border-none text-slate-800 pb-4"
              key={v4()}
            >
              <p className="flex-grow  text-slate-600 min-w-[100px]">{name}</p>
              <Field value={value} fieldType={fieldType} />
            </li>
          );
        })}
      </ul>
    );
  };

  const handleClickSeeMore = () => {
    setOverViewShowLimit(overviewFields.length);
  };

  const handleClickSeeLess = () => {
    setOverViewShowLimit(OVERVIEW_SHOW_LIMIT);
  };

  const renderSeeMoreButton = () => {
    if (overviewShowLimit < overviewFields.length) {
      return (
        <button
          onClick={handleClickSeeMore}
          className="flex items-center gap-1 mt-4 text-xs self-center"
        >
          <p className="text-sky font-semibold">See more</p>
          <FaChevronDown />
        </button>
      );
    }
  };

  const renderSeeLessButton = () => {
    if (overviewShowLimit == overviewFields.length) {
      return (
        <button
          onClick={handleClickSeeLess}
          className="flex items-center gap-1 mt-4 text-xs self-center"
        >
          <p className="text-sky font-semibold">See Less</p>
          <FaChevronUp />
        </button>
      );
    }
  };

  return (
    <div className="flex flex-col gap-2 bg-white p-4 rounded-2xl text-slate-600">
      <h1 className="text-sm font-medium">Overview</h1>
      {renderOverviewFields()}
      {renderSeeMoreButton()}
      {renderSeeLessButton()}
    </div>
  );
};

export default Overview;
