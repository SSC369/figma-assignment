import React, { useState } from "react";
import { v4 } from "uuid";
import { MULTI_SELECT_LIMIT } from "../constants";

const FieldMultiSelect = ({ value }) => {
  const multiSelectLimitData = value.slice(0, MULTI_SELECT_LIMIT);
  const diff = value.length - MULTI_SELECT_LIMIT;

  const renderCount = () => {
    if (diff > 0) {
      return <p className="text-slate-700">+{diff}</p>;
    }
  };

  return (
    <div className="flex items-center gap-2">
      <ul className="flex flex-wrap items-center custom-scrollbar pb-2 gap-2 ">
        {multiSelectLimitData.map((data) => {
          return (
            <li
              key={v4()}
              className="whitespace-nowrap text-xs p-1 px-2 rounded-xl font-medium bg-sky text-sky"
            >
              <p>{data}</p>
            </li>
          );
        })}
      </ul>

      {renderCount()}
    </div>
  );
};
export default FieldMultiSelect;
