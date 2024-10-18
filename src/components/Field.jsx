import dayjs from "dayjs";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { v4 } from "uuid";

import { FIELD_TYPES } from "../constants";

const Field = ({ value, fieldType }) => {
  const renderMultiSelect = (value) => {
    return (
      <ul className="flex items-center flex-wrap gap-2 max-w-[200px]">
        {value.map((data) => {
          return (
            <li
              key={v4()}
              style={{ backgroundColor: "#D1E9FF", color: "#1570EF" }}
              className="text-xs p-1 px-2 rounded-xl font-medium"
            >
              {data}
            </li>
          );
        })}
      </ul>
    );
  };

  const renderFieldValue = () => {
    switch (fieldType) {
      case FIELD_TYPES.DATE:
        return <p>{dayjs(new Date(value)).format("DD MMM YYYY")}</p>;
      case FIELD_TYPES.CHECKBOX_GROUP:
        if (typeof value === "object") {
          const checkboxText = value.join(", ");
          return <p className="font-medium break-words">{checkboxText}</p>;
        }
        return <p className="font-medium">True</p>;
      case FIELD_TYPES.MULTI_SELECT:
        return renderMultiSelect(value);
      case FIELD_TYPES.LONG_TEXT:
        return <p className=" max-w-[200px] text-wrap">{value}</p>;
      case FIELD_TYPES.PHONE_NUMBER:
        const { phoneNumber, countryCode } = value;
        return (
          <div className="text-blue-500 font-semibold flex items-center gap-2">
            <FaPhoneAlt />
            <p>
              {countryCode} {phoneNumber}
            </p>
          </div>
        );
      case FIELD_TYPES.URL:
        return <p className="font-medium text-blue-500"></p>;
      default:
        return <p className="font-medium break-words">{value}</p>;
    }
  };

  return <div className="text-slate-700">{renderFieldValue()}</div>;
};

export default Field;
