import useDebounce from "./useDebounce";
import useKeyPress from "./useKeyPress";

const useFunctionOnKey = (
  callback,
  keysNames,
  delay = 200,
  disableMainKeys = false,
  disableOnFocus = false
) => {
  const [pressedKey, setKey, keyPressEvent] = useKeyPress();
  useDebounce(() => executeOnClick(), delay, [pressedKey, keyPressEvent]);

  function executeOnClick() {
    const { shiftKey, altKey, ctrlKey } = keyPressEvent;
    const isOneOfMainKeysPressed = shiftKey || altKey || ctrlKey;
    const focusElement = document.activeElement?.tagName;
    const isFocusOnInput = /^(input|textarea)$/i.test(focusElement);
    const shouldRejectExecution =
      (disableMainKeys || disableOnFocus) &&
      (isOneOfMainKeysPressed || isFocusOnInput);

    if (shouldRejectExecution) return;

    if (keysNames.includes(pressedKey)) {
      callback();
      setKey("");
    }
  }
};

export default useFunctionOnKey;
