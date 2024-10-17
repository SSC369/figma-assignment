import dayjs from "dayjs";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { v4 } from "uuid";

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
      case "DATE":
        return <p>{dayjs(new Date(value)).format("DD MMM YYYY")}</p>;
      case "CHECKBOX_GROUP":
        const checkboxText = value.join(", ");
        return <p className="font-medium">{checkboxText}</p>;
      case "MULTI_SELECT":
        return renderMultiSelect(value);
      case "LONG_TEXT":
        return (
          <p className="whitespace-nowrap  font-medium text-ellipsis max-w-[200px] overflow-hidden">
            {value}
          </p>
        );
      case "PHONE_NUMBER":
        const { phoneNumber, countryCode } = value;
        return (
          <div className="text-blue-500 font-semibold flex items-center gap-2">
            <FaPhoneAlt />
            <p>
              {countryCode} {phoneNumber}
            </p>
          </div>
        );
      case "URL":
        return <p className="font-medium text-blue-500"></p>;
      default:
        return <p className="font-medium">{value}</p>;
    }
  };

  return <div>{renderFieldValue()}</div>;
};

export default Field;
