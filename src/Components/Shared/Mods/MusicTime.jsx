import { useEffect, useRef, useState } from "react";
import musicPath from "../../../Assets/Sounds/deep-show.mp3";
import { useGlobalContext } from "../../../Context/GlobalContext";
import useFunctionOnKey from "../../../Hooks/useFunctionOnKey";
import SvgIcon from "../MiniComponents/SvgIcon";

const MusicTime = () => {
  const [isMusicOn, setIsMusicOn] = useState(false);
  const musicRef = useRef(new Audio(musicPath));
  const music = musicRef.current;
  const { isFocusModeActiveLocal } = useGlobalContext();
  const noun = isMusicOn ? "Pause" : "Play";
  useFunctionOnKey(toggleMusic, "KeyM", true, true);

  function toggleMusic() {
    const method = music.paused ? "play" : "pause";
    setIsMusicOn((prevState) => !prevState);
    music[method]();
  }

  function stopMusic() {
    setIsMusicOn(false);
    music.pause();
  }

  useEffect(() => {
    music.addEventListener("ended", stopMusic);

    return () => {
      music.removeEventListener("ended", stopMusic);
      stopMusic();
    };
  }, []);

  return (
    !isFocusModeActiveLocal && (
      <button type="button" title={`${noun} Music`} onClick={toggleMusic}>
        <SvgIcon name={isMusicOn ? "pause" : "play"} />
      </button>
    )
  );
};
export default MusicTime;
