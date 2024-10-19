import React, { useContext, useState } from "react";
import logo from "../assets/logo.svg";
import { v4 } from "uuid";

import users from "../userData";
import { useNavigate } from "react-router-dom";
import { getLogo } from "../utils/leadUtils";
import { FaChevronDown } from "react-icons/fa";
import { LEAD_VIEW_PAGE_PATH } from "../constants";

const Users = () => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(LEAD_VIEW_PAGE_PATH + "/" + id);
  };

  return (
    <div className="min-h-dvh flex flex-col items-center justify-center gap-2 bg-slate-100">
      <img src={logo} className="h-6" />
      <h1 className="font-semibold text-slate-600 text-xl">CRM Users</h1>
      <ul className="min-w-[200px] w-[400px]">
        {users.map((user) => {
          const stage = user.stage;
          return (
            <li
              onClick={() => handleClick(user.leadId)}
              key={v4()}
              className="mt-4 hover:bg-slate-50 flex gap-2 items-center cursor-pointer bg-white py-2 px-2 rounded-2xl relative"
            >
              <div className="bg-sky rounded-full p-2 w-[40px] h-[40px] flex items-center justify-center">
                <p className="text-sky font-medium text-sm">
                  {getLogo(user.name)}
                </p>
              </div>
              <p className="flex-grow font-semibold text-sm text-slate-800 ">
                {user.name}
              </p>

              <div
                className="flex items-center gap-1 rounded-2xl px-2 text-white py-2 pl-2 pr-[6px]"
                style={{ backgroundColor: `${stage.bgColor}` }}
              >
                <p
                  style={{ color: stage.color }}
                  className="text-xs font-medium"
                >
                  {stage.name}
                </p>
                <FaChevronDown
                  style={{ color: stage.color }}
                  className="text-xs ml-1"
                />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Users;
