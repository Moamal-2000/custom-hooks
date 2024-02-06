import { useEffect, useRef, useState } from "react";
import musicPath from "../../../Assets/Sounds/deep-show.mp3";
import { useGlobalContext } from "../../../Context/GlobalContext";
import useFunctionOnKey from "../../../Hooks/useFunctionOnKey";
import styles from "./MusicTime.module.scss";

const MusicTime = () => {
  const [isMusicOn, setIsMusicOn] = useState(false);
  const musicRef = useRef(new Audio(musicPath));
  const music = musicRef.current;
  const { isFocusModeActiveLocal } = useGlobalContext();
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

  const buttonIcon = (
    <i
      className={`fa-solid fa-${
        isMusicOn ? `pause ${styles.pauseIcon}` : "play"
      }`}
    ></i>
  );

  return (
    !isFocusModeActiveLocal && (
      <button
        type="button"
        className={styles.musicButton}
        title="music icon"
        onClick={toggleMusic}
        tabIndex="4"
      >
        {buttonIcon}
      </button>
    )
  );
};
export default MusicTime;
