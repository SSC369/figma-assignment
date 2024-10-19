import React from "react";
import Field from "./Field";

const Gof = ({ name, value, fieldType }) => {
  return (
    <li className="text-sm flex flex-col gap-2 w-1/3 h-fit border-r-[1px] last:border-0 pr-6">
      <p className="text-slate-600 text-xs">{name}</p>
      <Field fieldType={fieldType} value={value} />
    </li>
  );
};

export default Gof;
