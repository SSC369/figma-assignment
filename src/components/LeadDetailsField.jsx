import React, { useState } from "react";
import Field from "./Field";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const LeadDetailsField = ({ gof }) => {
  const [showMore, setShowMore] = useState(false);
  const { name } = gof;

  const handleShow = () => {
    setShowMore(true);
  };

  const handleHide = () => {
    setShowMore(false);
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
        {gof.fields.length === 0 ? (
          <p className="">-</p>
        ) : (
          <ul className="flex gap-10 flex-wrap ">
            {gof.fields.map((field) => {
              const { name, value, fieldType, fieldId } = field;
              return (
                <li
                  className="text-sm flex flex-col gap-2 min-w-[200px] h-fit border-r-[1px] last:border-0 pr-6"
                  key={fieldId}
                >
                  <p className="text-slate-600 text-xs">{name}</p>
                  <Field fieldType={fieldType} value={value} />
                </li>
              );
            })}
          </ul>
        )}
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
    } else {
      return (
        <button onClick={handleShow}>
          <FaChevronDown />
        </button>
      );
    }
  };

  const handleToggle = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="mt-4 flex flex-col justify-between bg-white py-4 pr-4 rounded-xl">
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
