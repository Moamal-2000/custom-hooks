import { useEffect } from "react";
import useKeyPress from "./useKeyPress";

const useFunctionOnKey = (callback, keyName, disableMainKeys = false) => {
  const [pressedKey, setKey, keyPressEvent] = useKeyPress();

  useEffect(() => {
    const shiftKeyPressed = keyPressEvent.shiftKey;
    const altKeyPressed = keyPressEvent.altKey;
    const ctrlKeyPressed = keyPressEvent.ctrlKey;
    const isOneOfMainKeysPressed =
      shiftKeyPressed || altKeyPressed || ctrlKeyPressed;

    if (disableMainKeys) if (isOneOfMainKeysPressed) return;

    if (pressedKey === keyName) {
      callback();
      setKey("");
    }
  }, [pressedKey, keyPressEvent]);
};

export default useFunctionOnKey;
