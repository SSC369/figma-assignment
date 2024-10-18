import React, { useContext } from "react";

import { UserContext } from "../context/userContext";
import LeadDetailsField from "../components/LeadDetailsField";

const LeadDetails = () => {
  const { userData } = useContext(UserContext);
  const { gofs } = userData;
  return (
    <div className="px-6 pb-4 max-h-[72dvh] overflow-auto custom-scrollbar">
      <div className="flex items-center gap-2 mt-2">
        <h1 className="w-[120px] text-slate-600 font-medium">Lead Details</h1>
        <hr size="2" className="text-slate-600 w-full" />
      </div>

      <ul className="">
        {gofs.map((gof) => {
          const { id } = gof;
          return <LeadDetailsField key={id} gof={gof} />;
        })}
      </ul>
    </div>
  );
};

export default LeadDetails;
