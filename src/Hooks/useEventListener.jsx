import { useEffect } from "react";

const useEventListener = (ref, eventName, callback) => {
  useEffect(() => {
    const element = ref.current ? ref.current : ref;

    element?.addEventListener(eventName, callback);

    return () => element?.removeEventListener(eventName, callback);
  }, []);
};

export default useEventListener;
