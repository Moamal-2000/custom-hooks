import { useEffect, useRef } from "react";
import { useGlobalContext } from "../../../Context/GlobalContext";
import useOnScreen from "../../../Hooks/useOnScreen";
import styles from "./HookName.module.scss"

const HookName = ({ hookData: { name, id } }) => {
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
      {id + 1}- <strong>{name}</strong> Hook
    </h2>
  );
};
export default HookName;
