import { createContext } from "react";

export const AppContext = createContext();

const value = {
  data: "data",
};

export const AppContextProvider = (props) => {
  return (
    <AppContext.Provider value={data}>{props.children}</AppContext.Provider>
  );
};
