import { useEffect, useRef, useState } from "react";
import musicPath from "../../../Assets/Sounds/deep-show.mp3";
import { useGlobalContext } from "../../../Context/GlobalContext";
import useDebounce from "../../../Hooks/useDebounce";
import useFunctionOnKey from "../../../Hooks/useFunctionOnKey";
import SvgIcon from "../MiniComponents/SvgIcon";

const MusicTime = () => {
  const [isMusicOn, setIsMusicOn] = useState(false);
  const [musicLoaded, setMusicLoaded] = useState(false);
  const musicRef = useRef(null);
  const { isFocusModeActiveLocal } = useGlobalContext();
  const noun = isMusicOn ? "Pause" : "Play";
  const { debounceFun } = useDebounce(200);
  useFunctionOnKey(toggleMusic, "KeyM", true, true);

  function toggleMusic() {
    debounceFun(() => {
      if (!musicLoaded) {
        musicRef.current = new Audio();
        musicRef.current.src = musicPath;
        setMusicLoaded(true);
      }

      const method = musicRef.current.paused ? "play" : "pause";
      setIsMusicOn((prevState) => !prevState);
      musicRef.current[method]();
    });
  }

  function stopMusic() {
    setIsMusicOn(false);
    musicRef.current.pause();
  }

  useEffect(() => {
    if (musicLoaded) {
      musicRef.current.addEventListener("ended", stopMusic);

      return () => {
        musicRef.current.removeEventListener("ended", stopMusic);
        stopMusic();
      };
    }
  }, [musicLoaded]);

  return (
    !isFocusModeActiveLocal && (
      <button type="button" title={`${noun} Music`} onClick={toggleMusic}>
        <SvgIcon name={isMusicOn ? "pause" : "play"} />
      </button>
    )
  );
};
export default MusicTime;
