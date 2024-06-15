import { createContext, useContext, useState } from "react";
import { hooksData } from "../Data/hooksData";

const HooksContextProvider = ({ children }) => {
  const [scrolledHook, setScrolledHook] = useState(hooksData[0].name);
  const numberOfHooks = hooksData.length;
  const hooksPerPage = 5;
  const numbersOfPages = Math.ceil(numberOfHooks / hooksPerPage);

  const data = {
    numberOfHooks,
    scrolledHook,
    setScrolledHook,
    hooksPerPage,
    numbersOfPages,
  };

  return <HooksContext.Provider value={data}>{children}</HooksContext.Provider>;
};

export default HooksContextProvider;
const HooksContext = createContext();
export const useHooksContext = () => useContext(HooksContext);
