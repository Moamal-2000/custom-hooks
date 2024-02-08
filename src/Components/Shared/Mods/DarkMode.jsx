import { useEffect } from "react";
import { useGlobalContext } from "../../../Context/GlobalContext";
import useFunctionOnKey from "../../../Hooks/useFunctionOnKey";
import SvgIcon from "../MiniComponents/SvgIcon";

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
      <SvgIcon name={isDarkModeLocal ? "moon" : "sun"} />
    </button>
  );
};
export default DarkMode;
