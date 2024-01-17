import { useEffect } from "react";

const useEventListener = (element, eventName, callback) => {
  useEffect(() => {
    element.addEventListener(eventName, callback);

    return () => {
      element.removeEventListener(eventName, callback);
    };
  }, []);
};
export default useEventListener
