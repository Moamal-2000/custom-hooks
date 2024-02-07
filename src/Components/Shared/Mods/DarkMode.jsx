import { useEffect } from "react";
import { useGlobalContext } from "../../../Context/GlobalContext";
import useFunctionOnKey from "../../../Hooks/useFunctionOnKey";

const DarkMode = () => {
  const { isDarkModeLocal, setIsDarkModeLocal } = useGlobalContext();
  useFunctionOnKey(toggleDarkMode, "KeyD", true, true);
  let noun = isDarkModeLocal ? "Dark" : "Light";

  function toggleDarkMode() {
    setIsDarkModeLocal(!isDarkModeLocal);
  }

  useEffect(() => {
    const method = isDarkModeLocal ? "add" : "remove";
    document.documentElement.classList[method]("light-mode");
  }, [isDarkModeLocal]);

  return (
    <button type="button" onClick={toggleDarkMode} title={`${noun} Mode`}>
      <i className={`fa-regular fa-${isDarkModeLocal ? "moon" : "sun"}`}></i>
    </button>
  );
};
export default DarkMode;
