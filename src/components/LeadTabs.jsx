import React, { useContext } from "react";
import { v4 } from "uuid";
import { useNavigate } from "react-router-dom";

import {
  BsActivity,
  CgProfile,
  IoDocumentTextOutline,
  IoIosCall,
  LuFileEdit,
  TbHistory,
} from "../Icons";
import { LEAD_TABS } from "../constants";
import { UserContext } from "../context/userContext";
import { getTab } from "../utils/leadUtils";

const LeadTabs = () => {
  const { activeTab, setActiveTab } = useContext(UserContext);
  const leadTabs = Object.keys(LEAD_TABS);
  const navigate = useNavigate();

  const renderTabIcon = (tab) => {
    switch (tab) {
      case LEAD_TABS["lead-details"]:
        return (
          <CgProfile
            className={`text-xl  ${
              activeTab === LEAD_TABS["lead-details"]
                ? "text-sky"
                : "text-[#98A2B3]"
            }`}
          />
        );
      case LEAD_TABS.activities:
        return (
          <BsActivity
            className={`text-xl  ${
              activeTab === LEAD_TABS.activities ? "text-sky" : "text-[#98A2B3]"
            }`}
          />
        );
      case LEAD_TABS.remarks:
        return (
          <LuFileEdit
            className={`text-xl  ${
              activeTab === LEAD_TABS.remarks ? "text-sky" : "text-[#98A2B3]"
            }`}
          />
        );
      case LEAD_TABS.documents:
        return (
          <IoDocumentTextOutline
            className={`text-xl  ${
              activeTab === LEAD_TABS.documents ? "text-sky" : "text-[#98A2B3]"
            }`}
          />
        );
      case LEAD_TABS["call-log"]:
        return (
          <IoIosCall
            className={`text-xl  ${
              activeTab === LEAD_TABS["call-log"]
                ? "text-sky"
                : "text-[#98A2B3]"
            }`}
          />
        );
      case LEAD_TABS["history-log"]:
        return (
          <TbHistory
            className={`text-xl  ${
              activeTab === LEAD_TABS["history-log"]
                ? "text-sky"
                : "text-[#98A2B3]"
            }`}
          />
        );
      default:
        break;
    }
  };

  const handleTabClick = (tab) => {
    if (tab === LEAD_TABS["lead-details"]) {
      navigate("/");
    } else {
      navigate(tab);
    }
    setActiveTab(tab);
  };

  const renderTab = (data, tab) => {
    return (
      <li
        onClick={() => handleTabClick(data)}
        className={`flex cursor-pointer justify-center items-center gap-2 pb-2 h-[40px] ${
          activeTab === data && "border-b-2 border-solid border-sky"
        }`}
        key={v4()}
      >
        {renderTabIcon(data)}
        <p
          className={`text-sm text-[#667085] font-medium ${
            activeTab === data && "text-sky"
          }`}
        >
          {tab}
        </p>
      </li>
    );
  };

  return (
    <ul className="static z-[100]  bg-slate-100 flex items-center gap-4 border-b-[1px] overflow-auto custom-scrollbar">
      {leadTabs.map((data) => {
        const tab = getTab(data);
        return renderTab(data, tab);
      })}
    </ul>
  );
};

export default LeadTabs;
