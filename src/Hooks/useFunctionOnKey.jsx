import { useEffect } from "react";
import useKeyPress from "./useKeyPress";

const useFunctionOnKey = (
  callback,
  keyName,
  disableMainKeys = false,
  disableOnFocus = false
) => {
  const [pressedKey, setKey, keyPressEvent] = useKeyPress();

  useEffect(() => {
    const shiftKeyPressed = keyPressEvent.shiftKey;
    const altKeyPressed = keyPressEvent.altKey;
    const ctrlKeyPressed = keyPressEvent.ctrlKey;
    const isOneOfMainKeysPressed =
      shiftKeyPressed || altKeyPressed || ctrlKeyPressed;
    const focusElementTagName = document.activeElement?.tagName;
    const isFocusOnInput =
      focusElementTagName === "INPUT" || focusElementTagName === "TEXTAREA";

    if (disableMainKeys || disableOnFocus) {
      if (isOneOfMainKeysPressed || isFocusOnInput) return;
    }

    if (pressedKey === keyName) {
      callback();
      setKey("");
    }
  }, [pressedKey, keyPressEvent]);
};

export default useFunctionOnKey;
