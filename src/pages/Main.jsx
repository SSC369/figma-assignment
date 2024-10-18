import React from "react";
import OverviewAssigneeSection from "./OverviewAssigneeSection";
import LeadViewSection from "./LeadViewSection";
import { Toaster } from "react-hot-toast";

const Main = () => {
  return (
    <main className="flex justify-center px-[160px] bg-slate-100 min-h-dvh pt-[150px]">
      <OverviewAssigneeSection />
      <LeadViewSection />
      <Toaster position="top-center" reverseOrder={true} />
    </main>
  );
};

export default Main;
