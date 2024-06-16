import { useEffect } from "react";
import { useModesContext } from "src/Context/ModesContext";
import useFunctionOnKey from "src/Hooks/useFunctionOnKey";
import SvgIcon from "../MiniComponents/SvgIcon";
import ToolTip from "../MiniComponents/ToolTip";

const DarkMode = () => {
  const { isDarkModeLocal, setIsDarkModeLocal } = useModesContext();
  let noun = isDarkModeLocal ? "Dark" : "Light";
  const toolTipLeftPos = isDarkModeLocal ? "-97px" : "-98px";
  useFunctionOnKey(toggleDarkMode, ["KeyD"], 300, true, true);

  function toggleDarkMode() {
    setIsDarkModeLocal(!isDarkModeLocal);
  }

  useEffect(() => {
    const method = isDarkModeLocal ? "add" : "remove";
    document.documentElement.classList[method]("light-mode");
  }, [isDarkModeLocal]);

  return (
    <button type="button" onClick={toggleDarkMode} aria-label={`${noun} Mode`}>
      <SvgIcon name={isDarkModeLocal ? "moon" : "sun"} />
      <ToolTip
        content={`${noun} Mode`}
        left={toolTipLeftPos}
        top="1.3px"
        arrowDir="right"
      />
    </button>
  );
};
export default DarkMode;
