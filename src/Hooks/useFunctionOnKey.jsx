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
    const { shiftKey, altKey, ctrlKey } = keyPressEvent;
    const isOneOfMainKeysPressed = shiftKey || altKey || ctrlKey;
    const focusElement = document.activeElement?.tagName;
    const isFocusOnInput = /^(input|textarea)$/i.test(focusElement);
    const shouldRejectExecution =
      (disableMainKeys || disableOnFocus) &&
      (isOneOfMainKeysPressed || isFocusOnInput);

    if (shouldRejectExecution) return;

    if (pressedKey === keyName) {
      callback();
      setKey("");
    }
  }, [pressedKey, keyPressEvent]);
};

export default useFunctionOnKey;
