import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { UserContextProvider } from "./context/userContext";
import Header from "./components/Header";
import LeadViewSection from "./pages/LeadViewSection";
import OverviewAssigneeSection from "./pages/OverviewAssigneeSection";

const App = () => {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <Header />
        <main className="flex px-20 bg-slate-100 min-h-dvh pt-[129px]">
          <OverviewAssigneeSection />
          <LeadViewSection />
          <Toaster position="top-center" reverseOrder={true} />
        </main>
      </UserContextProvider>
    </BrowserRouter>
  );
};

export default App;
