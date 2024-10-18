import React from "react";
import { Route, Routes } from "react-router-dom";

import LeadTabs from "../components/LeadTabs";
import LeadDetails from "./LeadDetails";
import { LEAD_TABS } from "../constants";
import Activities from "./Activities";
import Documents from "./Documents";
import CallLog from "./CallLog";
import Remarks from "./Remarks";
import HistoryLog from "./HistoryLog";

const LeadViewSection = () => {
  return (
    <section className="relative p-6 w-[794px]">
      <LeadTabs />
      <Routes>
        <Route path="/" element={<LeadDetails />} />
        <Route path={LEAD_TABS.activities} element={<Activities />} />
        <Route path={LEAD_TABS.documents} element={<Documents />} />
        <Route path={LEAD_TABS["call-log"]} element={<CallLog />} />
        <Route path={LEAD_TABS.remarks} element={<Remarks />} />
        <Route path={LEAD_TABS["history-log"]} element={<HistoryLog />} />
      </Routes>
    </section>
  );
};

export default LeadViewSection;
