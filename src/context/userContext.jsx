import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Loader from "../components/Loader";
import data from "../userData";
import { LEAD_TABS } from "../constants";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [activeTab, setActiveTab] = useState(LEAD_TABS["lead-details"]);
  const [isLoading, setIsLoading] = useState(false);

  const { leadId } = useParams();

  useEffect(() => {
    if (leadId) {
      fetchData();
    }
  }, [leadId]);

  const fetchData = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const leadData = data.find((lead) => lead.leadId === leadId);

    setUserData(leadData);
    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <div className="min-h-dvh flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (!isLoading && userData) {
    const { leadId, name, stage, overviewFields } = userData;
    const headerData = { leadId, name, stage };

    return (
      <UserContext.Provider
        value={{
          headerData,
          overviewFields,
          activeTab,
          setActiveTab,
          userData,
          fetchData,
        }}
      >
        {children}
      </UserContext.Provider>
    );
  }

  return null;
};
