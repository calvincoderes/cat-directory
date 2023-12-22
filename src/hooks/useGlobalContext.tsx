import { useContext } from "react";
import { GlobalContextPropsInterface } from "../types/interfaces";
import { GlobalContext } from "../store/GlobalContext";

// Custom hook for using the context
export const useGlobalContext = (): GlobalContextPropsInterface => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};
