import React, { useContext } from "react";
import { LEAD_TABS } from "../constants";
import { v4 } from "uuid";
import { BsActivity } from "react-icons/bs";
import { TbHistory } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { IoIosCall } from "react-icons/io";
import { IoDocumentTextOutline } from "react-icons/io5";
import { LuFileEdit } from "react-icons/lu";
import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";

const LeadTabs = () => {
  const { activeTab, setActiveTab } = useContext(UserContext);
  const leadTabs = Object.keys(LEAD_TABS);
  const navigate = useNavigate();

  const renderTabIcon = (tab) => {
    const iconStyle = "text-xl text-[#98A2B3]";
    switch (tab) {
      case LEAD_TABS["lead-details"]:
        return (
          <CgProfile
            style={
              activeTab === LEAD_TABS["lead-details"]
                ? { color: "#1570EF" }
                : {}
            }
            className={iconStyle}
          />
        );
      case LEAD_TABS.activities:
        return (
          <BsActivity
            style={
              activeTab === LEAD_TABS.activities ? { color: "#1570EF" } : {}
            }
            className={iconStyle}
          />
        );
      case LEAD_TABS.remarks:
        return (
          <LuFileEdit
            style={activeTab === LEAD_TABS.remarks ? { color: "#1570EF" } : {}}
            className={iconStyle}
          />
        );
      case LEAD_TABS.documents:
        return (
          <IoDocumentTextOutline
            style={
              activeTab === LEAD_TABS.documents ? { color: "#1570EF" } : {}
            }
            className={iconStyle}
          />
        );
      case LEAD_TABS["call-log"]:
        return (
          <IoIosCall
            style={
              activeTab === LEAD_TABS["call-log"] ? { color: "#1570EF" } : {}
            }
            className={iconStyle}
          />
        );
      case LEAD_TABS["history-log"]:
        return (
          <TbHistory
            style={
              activeTab === LEAD_TABS["history-log"] ? { color: "#1570EF" } : {}
            }
            className={iconStyle}
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

  return (
    <ul className="sticky top-[129px] z-50  gap-10 overflow-hidden pt-2 bg-slate-100 flex items-center justify-between px-4 border-b-[1px]">
      {leadTabs.map((data) => {
        const splitTab = data.split("-");
        const tabArray = splitTab.map((tab) => {
          return tab[0].toUpperCase() + tab.slice(1);
        });
        const tab = tabArray.join(" ");
        return (
          <li
            onClick={() => handleTabClick(data)}
            style={
              activeTab === data ? { borderBottom: "2px solid #1570EF" } : {}
            }
            className="flex cursor-pointer items-center gap-2  pb-2 h-[40px]"
            key={v4()}
          >
            {renderTabIcon(data)}
            <p
              style={activeTab === data ? { color: "#1570EF" } : {}}
              className="text-sm text-[#667085] font-medium"
            >
              {tab}
            </p>
          </li>
        );
      })}
    </ul>
  );
};

export default LeadTabs;
