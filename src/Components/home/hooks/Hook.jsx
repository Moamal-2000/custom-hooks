import { memo, useEffect, useRef } from "react";
import { useGlobalContext } from "../../../Context/GlobalContext";
import useOnScreen from "../../../Hooks/useOnScreen";
import styles from "./Hook.module.scss";
import HookCode from "./HookCode";
import HookExplanation from "./HookExplanation";
import HookInputsOutputs from "./HookInputsOutputs";

const Hook = ({ hookData }) => {
  const { name, explanation, liveCode, inputs, outputs, id } = hookData;
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
    <div className={styles.hook} id={`${name}-hook`}>
      <h2 ref={hookTitleRef}>
        {id + 1}- <strong>{name}</strong> Hook
      </h2>

      <HookExplanation
        name={name}
        explanation={explanation}
        liveCode={liveCode}
      />
      <HookInputsOutputs data={{ inputs, outputs }} />
      <HookCode hookData={hookData} />
    </div>
  );
};
export default memo(Hook);
