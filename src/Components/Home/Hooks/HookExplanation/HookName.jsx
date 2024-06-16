import { useEffect, useRef } from "react";
import { useHooksContext } from "src/Context/HooksContext";
import useOnScreen from "src/Hooks/useOnScreen";
import s from "./HookName.module.scss";

const HookName = ({ hookData: { name, index } }) => {
  const { setScrolledHook } = useHooksContext();
  const hookTitleRef = useRef();
  const isVisible = useOnScreen(hookTitleRef);

  useEffect(() => {
    let timerId;
    clearTimeout(timerId);
    timerId = setTimeout(() => isVisible && setScrolledHook(name), 400);

    return () => clearTimeout(timerId);
  }, [isVisible]);

  return (
    <h2 ref={hookTitleRef} className={s.hookName}>
      {index}- <strong>{name} Hook</strong>
    </h2>
  );
};
export default HookName;
