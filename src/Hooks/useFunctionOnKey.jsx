import { useEffect } from "react";
import useKeyPress from "./useKeyPress";

const useFunctionOnKey = (callback, keyName) => {
  const [pressedKey, setKey] = useKeyPress();

  useEffect(() => {
    if (pressedKey === keyName) {
      callback();
      setKey("");
    }
  }, [pressedKey]);
};

export default useFunctionOnKey;
