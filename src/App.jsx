import React from "react";
import { TbPinned } from "react-icons/tb";
import { FiUser } from "react-icons/fi";

import { UserContextProvider } from "./context/userContext";
import Header from "./components/Header";
import Assignees from "./components/Assignees";
import Overview from "./components/Overview";
import ToggleButton from "./components/ToggleButton";
import dayjs from "dayjs";
import LeadTabs from "./components/LeadTabs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LeadDetails from "./pages/LeadDetails";
import { LEAD_TABS } from "./constants";
import Activities from "./pages/Activities";
import Documents from "./pages/Documents";
import CallLog from "./pages/CallLog";
import Remarks from "./pages/Remarks";
import HistoryLog from "./pages/HistoryLog";

const App = () => {
  const date = dayjs(new Date()).format("DD MMM YYYY, HH:MM A");
  return (
    <BrowserRouter>
      <UserContextProvider>
        <Header />
        <main className="flex px-20 bg-slate-100 min-h-dvh pt-[129px]">
          <section className="border-r-[1px] w-1/3 p-3 flex flex-col gap-4">
            <div className="flex items-center gap-1 bg-white p-3 rounded-2xl text-slate-600">
              <TbPinned className="text-lg" />
              <p className="flex-grow text-sm font-medium">Pinned</p>
              <ToggleButton />
            </div>

            <div className="flex justify-between items-center gap-2 bg-white p-3 rounded-2xl text-slate-600">
              <p className="text-sm font-medium">Created on</p>
              <p className="text-xs font-medium">{date}</p>
            </div>
            <Assignees />
            <Overview />
          </section>
          <section className="w-2/3 relative">
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
        </main>
      </UserContextProvider>
    </BrowserRouter>
  );
};

export default App;
