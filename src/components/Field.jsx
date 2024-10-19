import dayjs from "dayjs";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { v4 } from "uuid";

import { FIELD_DATE_FORMAT, FIELD_TYPES } from "../constants";

const Field = ({ value, fieldType }) => {
  const renderMultiSelect = (value) => {
    return (
      <ul className="flex items-center flex-wrap gap-2 max-w-[200px]">
        {value.map((data) => {
          return (
            <li
              key={v4()}
              className="text-xs p-1 px-2 rounded-xl font-medium bg-sky text-sky"
            >
              {data}
            </li>
          );
        })}
      </ul>
    );
  };

  const renderFieldPhoneNumber = (value) => {
    const { phoneNumber, countryCode } = value;
    return (
      <div className="text-sky font-semibold flex items-center gap-2">
        <FaPhoneAlt />
        <p>
          {countryCode} {phoneNumber}
        </p>
      </div>
    );
  };

  const renderCheckBoxText = (value) => {
    if (typeof value === "object") {
      const checkboxText = value.join(", ");
      return <p className="font-medium break-words">{checkboxText}</p>;
    }
    return <p className="font-medium">True</p>;
  };

  const renderFieldValue = () => {
    switch (fieldType) {
      case FIELD_TYPES.DATE:
        return <p>{dayjs(new Date(value)).format(FIELD_DATE_FORMAT)}</p>;
      case FIELD_TYPES.CHECKBOX_GROUP:
        return renderCheckBoxText(value);
      case FIELD_TYPES.MULTI_SELECT:
        return renderMultiSelect(value);
      case FIELD_TYPES.LONG_TEXT:
        return <p className=" max-w-[200px] text-wrap">{value}</p>;
      case FIELD_TYPES.PHONE_NUMBER:
        return renderFieldPhoneNumber(value);
      case FIELD_TYPES.URL:
        return <p className="font-medium text-sky"></p>;
      default:
        return <p className="font-medium break-words">{value}</p>;
    }
  };

  return <div className="text-slate-700">{renderFieldValue()}</div>;
};

export default Field;
