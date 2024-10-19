import React from "react";
import { Route, Routes } from "react-router-dom";

import LeadTabs from "../components/LeadTabs";
import LeadDetails from "./LeadDetails";
import { HOME_ROUTE, LEAD_TABS, LEAD_TABS_NAVIGATE } from "../constants";
import Activities from "./Activities";
import Documents from "./Documents";
import CallLog from "./CallLog";
import Remarks from "./Remarks";
import HistoryLog from "./HistoryLog";

const LeadViewSection = () => {
  return (
    <section className="relative p-6 w-2/3">
      <LeadTabs />
      <Routes>
        <Route
          path={LEAD_TABS_NAVIGATE["lead-details"]}
          element={<LeadDetails />}
        />
        <Route path={LEAD_TABS_NAVIGATE.activities} element={<Activities />} />
        <Route path={LEAD_TABS_NAVIGATE.documents} element={<Documents />} />
        <Route path={LEAD_TABS_NAVIGATE["call-log"]} element={<CallLog />} />
        <Route path={LEAD_TABS_NAVIGATE.remarks} element={<Remarks />} />
        <Route
          path={LEAD_TABS_NAVIGATE["history-log"]}
          element={<HistoryLog />}
        />
      </Routes>
    </section>
  );
};

export default LeadViewSection;
