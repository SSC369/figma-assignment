import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "../Icons";

import Gof from "./Gof";
import { v4 } from "uuid";

const LeadDetailsField = ({ gof }) => {
  const [showMore, setShowMore] = useState(false);
  const { name } = gof;

  const handleShow = () => {
    setShowMore(true);
  };

  const handleHide = () => {
    setShowMore(false);
  };

  const renderGof = (gof) => {
    if (gof.fields.length === 0) {
      return <p className="">-</p>;
    }

    return (
      <ul className="flex gap-6 flex-wrap">
        {gof.fields.map((field) => {
          const { name, value, fieldType, fieldId } = field;
          return (
            <Gof name={name} value={value} key={v4()} fieldType={fieldType} />
          );
        })}
      </ul>
    );
  };

  const renderGofs = (gof) => {
    return (
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          showMore
            ? "max-h-[400px] opacity-100 pt-6 pb-3 px-6"
            : "max-h-0 opacity-0"
        }`}
      >
        {renderGof(gof)}
      </div>
    );
  };

  const renderShowButton = () => {
    if (showMore) {
      return (
        <button onClick={handleHide}>
          <FaChevronUp />
        </button>
      );
    }
    return (
      <button onClick={handleShow}>
        <FaChevronDown />
      </button>
    );
  };

  const handleToggle = (e) => {
    setShowMore(!showMore);
    e.stopPropagation();
  };

  return (
    <div className="mt-4 flex flex-col justify-between bg-white py-4 pr-4 rounded-2xl min-h-[54px] mr-4">
      <div
        onClick={handleToggle}
        className="flex items-center justify-between relative w-full"
      >
        <div className="h-6 w-[3px] rounded-r-lg bg-blue-600 absolute left-0"></div>
        <h1 className="text-slate-800 text-sm font-medium ml-4">{name}</h1>
        {renderShowButton()}
      </div>

      {renderGofs(gof)}
    </div>
  );
};

export default LeadDetailsField;
