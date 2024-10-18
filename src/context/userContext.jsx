import { createContext, useEffect, useState } from "react";

import Loader from "../components/Loader";
import data from "../data";
import { LEAD_TABS } from "../constants";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [activeTab, setActiveTab] = useState(LEAD_TABS["lead-details"]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setIsLoading(true);
    setTimeout(() => {
      setUserData(data);
      setIsLoading(false);
    }, 1000);
  };

  if (isLoading) {
    return (
      <div className="min-h-dvh flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (!isLoading && userData) {
    const { leadId, name, stage, assignees, overviewFields } = userData;
    const headerData = {
      leadId,
      name,
      stage,
    };
    return (
      <UserContext.Provider
        value={{
          headerData,
          assignees,
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

  return (
    <div>
      <h1>Something Went Wrong !!!</h1>
    </div>
  );
};
