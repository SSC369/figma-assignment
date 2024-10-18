import React from "react";
import { BrowserRouter } from "react-router-dom";

import { UserContextProvider } from "./context/userContext";
import Header from "./components/Header";
import Main from "./pages/Main";

const App = () => {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <Header />
        <Main />
      </UserContextProvider>
    </BrowserRouter>
  );
};

export default App;
