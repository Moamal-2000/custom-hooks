import { useEffect, useRef, useState } from "react";
import audioPath from "../../../Assets/Sounds/deep-show.mp3";
import { useGlobalContext } from "../../../Context/GlobalContext";
import styles from "./MusicTime.module.scss";

const MusicTime = () => {
  const [isMusicOn, setIsMusicOn] = useState(false);
  const musicRef = useRef(new Audio(audioPath));
  const music = musicRef.current;
  const { isFocusModeActiveLocal } = useGlobalContext();

  function toggleMusic() {
    setIsMusicOn((prevState) => !prevState);
    music[music.paused ? "play" : "pause"]();
  }

  function stopMusic() {
    music.pause();
    setIsMusicOn(false);
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
      <button
        type="button"
        className={styles.musicButton}
        title="music icon"
        onClick={toggleMusic}
      >
        <i
          className={`fa-solid fa-${
            isMusicOn ? `pause ${styles.pauseIcon}` : "play"
          }`}
        ></i>
      </button>
    )
  );
};
export default MusicTime;
