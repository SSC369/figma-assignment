import React, { useState } from "react";
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
  return (
    <div className="mt-4 flex items-center justify-between bg-white p-4 rounded-xl relative">
      <div className="h-6 w-[4px] rounded-r-lg bg-blue-600 absolute left-0"></div>
      <h1 className="text-slate-800 text-sm font-medium">{name}</h1>
      {showMore ? (
        <button onClick={handleHide}>
          <FaChevronUp />
        </button>
      ) : (
        <button onClick={handleShow}>
          <FaChevronDown />
        </button>
      )}
    </div>
  );
};

export default LeadDetailsField;
