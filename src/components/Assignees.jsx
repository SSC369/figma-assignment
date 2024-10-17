import React, { useContext, useEffect, useState } from "react";
import { MdOutlineEdit } from "react-icons/md";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { FiUser } from "react-icons/fi";

import { UserContext } from "../context/userContext";
import { v4 } from "uuid";
import { ASSIGNEES_SHOW_LIMIT } from "../constants";

const Assignees = () => {
  const { assignees } = useContext(UserContext);
  const [showLimit, setShowLimit] = useState(ASSIGNEES_SHOW_LIMIT);

  let assigneesLimitData;
  if (assignees.length > showLimit) {
    assigneesLimitData = assignees.slice(0, showLimit);
  } else {
    assigneesLimitData = assignees;
  }

  const renderAssignees = () => {
    return (
      <ul className="flex flex-col gap-2 ">
        {assigneesLimitData.map((a, index) => {
          const { id, name, profilePic } = a;
          return (
            <li
              className="flex items-center text-xs border-b-[1px] last:border-none py-2"
              key={v4()}
            >
              <p className="flex-grow font-medium text-slate-600">{id}</p>
              <p className="font-medium text-slate-800">{name}</p>
              <div className="bg-slate-100 w-fit p-1 rounded-full ml-2">
                <FiUser className="text-xl" />
              </div>
            </li>
          );
        })}
      </ul>
    );
  };

  const handleClickSeeMore = () => {
    setShowLimit(assignees.length);
  };

  const handleClickSeeLess = () => {
    setShowLimit(ASSIGNEES_SHOW_LIMIT);
  };

  const renderSeeMoreButton = () => {
    if (showLimit < assignees.length) {
      return (
        <button
          onClick={handleClickSeeMore}
          className="flex items-center gap-1 text-xs self-center"
        >
          <p className="text-blue-500 font-semibold">See more</p>
          <FaChevronDown />
        </button>
      );
    }
  };

  const renderSeeLessButton = () => {
    if (showLimit == assignees.length) {
      return (
        <button
          onClick={handleClickSeeLess}
          className="flex items-center gap-1 text-xs self-center"
        >
          <p className="text-blue-500 font-semibold">See Less</p>
          <FaChevronUp />
        </button>
      );
    }
  };

  const renderAssigneesHeader = () => {
    return (
      <div className="flex  items-center justify-between text-slate-600">
        <h1 className="text-sm font-medium">Assignees</h1>
        <button className="flex items-center gap-2">
          <MdOutlineEdit color="#1570EF" />
          <p className="text-xs text-blue-600 font-medium">Edit</p>
        </button>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-2 bg-white p-3 rounded-2xl text-slate-600">
      {renderAssigneesHeader()}
      {renderAssignees()}
      {renderSeeMoreButton()}
      {renderSeeLessButton()}
    </div>
  );
};

export default Assignees;
