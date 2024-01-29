import { useEffect, useState } from "react";

const useKeyPress = () => {
  const [event, setEvent] = useState({});
  const [key, setKey] = useState("");

  function handleKeyPress(e) {
    setEvent(e);
    setKey(e.code);
  }

  useEffect(() => {
    window.addEventListener("keydown", (e) => handleKeyPress(e));

    return () => {
      window.removeEventListener("keydown", (e) => handleKeyPress(e));
    };
  }, []);

  return [key, setKey, event];
};

export default useKeyPress;
