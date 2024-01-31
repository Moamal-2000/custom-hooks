import { useEffect, useRef, useState } from "react";
import audioPath from "../../../Assets/Sounds/deep-show.mp3";
import { useGlobalContext } from "../../../Context/GlobalContext";
import styles from "./MusicTime.module.scss";

const MusicTime = () => {
  const [isMusicOn, setIsMusicOn] = useState(false);
  const musicRef = useRef(new Audio(audioPath));
  const { isFocusModeActiveLocal } = useGlobalContext();

  function toggleMusic() {
    const music = musicRef.current;
    setIsMusicOn((prevState) => !prevState);
    music[music.paused ? "play" : "pause"]();
  }

  useEffect(() => {
    return () => {
      musicRef.current.pause();
      setIsMusicOn(false);
    };
  }, []);

  return (
    !isFocusModeActiveLocal && (
      <button
        type="button"
        className={styles.musicButton}
        title="music icon"
        onClick={toggleMusic}
        tabIndex="4"
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
