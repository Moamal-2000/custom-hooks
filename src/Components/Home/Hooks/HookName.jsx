import { useEffect, useRef } from "react";
import { useGlobalContext } from "../../../Context/GlobalContext";
import useOnScreen from "../../../Hooks/useOnScreen";
import styles from "./HookName.module.scss"

const HookName = ({ hookData: { name, index } }) => {
  const { setScrolledHook } = useGlobalContext();
  const hookTitleRef = useRef();
  const isVisible = useOnScreen(hookTitleRef);

  useEffect(() => {
    let timerId;
    clearTimeout(timerId);
    timerId = setTimeout(() => isVisible && setScrolledHook(name), 400);

    return () => clearTimeout(timerId);
  }, [isVisible]);

  return (
    <h2 ref={hookTitleRef} className={styles.hookName}>
      {index}- <strong>{name} Hook</strong> 
    </h2>
  );
};
export default HookName;
