import { useEffect, useRef, useState } from "react";
import musicPath from "../../../Assets/Sounds/deep-show.mp3";
import { useGlobalContext } from "../../../Context/GlobalContext";
import useFunctionOnKey from "../../../Hooks/useFunctionOnKey";
import SvgIcon from "../MiniComponents/SvgIcon";
import ToolTip from "../MiniComponents/ToolTip";

const MusicTime = () => {
  const [isMusicOn, setIsMusicOn] = useState(false);
  const musicRef = useRef(new Audio(musicPath));
  const { isFocusModeActiveLocal } = useGlobalContext();
  const noun = isMusicOn ? "Pause" : "Play";
  const toolTipLeftPos = isMusicOn ? "-108px" : "-96px";
  useFunctionOnKey(toggleMusic, ["KeyP"], 300, true, true);
  musicRef.current.preload = "none";

  function toggleMusic() {
    const method = musicRef.current.paused ? "play" : "pause";
    setIsMusicOn((prevState) => !prevState);
    musicRef.current[method]();
  }

  function stopMusic() {
    setIsMusicOn(false);
    musicRef.current.pause();
  }

  useEffect(() => {
    musicRef.current.addEventListener("ended", stopMusic);

    return () => {
      musicRef.current.removeEventListener("ended", stopMusic);
      stopMusic();
    };
  }, []);

  return (
    !isFocusModeActiveLocal && (
      <button type="button" aria-label={`${noun} Music`} onClick={toggleMusic}>
        <SvgIcon name={isMusicOn ? "pause" : "play"} />
        <ToolTip
          content={`${noun} Music`}
          left={toolTipLeftPos}
          top="1.3px"
          arrowDir="right"
        />
      </button>
    )
  );
};
export default MusicTime;
