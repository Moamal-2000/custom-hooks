import { memo, useEffect, useRef } from "react";
import { useGlobalContext } from "../../Context/GlobalContext";
import useElementData from "../../Hooks/useElementData";
import HookCode from "./HookCode";
import HookExplanation from "./HookExplanation";
import HookInputsOutputs from "./HookInputsOutputs";

const Hook = ({ hookData }) => {
  const { name, explanation, liveCode, inputs, outputs, id, code } = hookData;
  const { scrolledHook, setScrolledHook } = useGlobalContext();
  const hookTitleRef = useRef();
  const [hookContainerEle, hookContainerData, renders, setRenders] =
    useElementData(hookTitleRef);
  const { isVisible } = hookContainerData;

  useEffect(() => {
    if (isVisible) setScrolledHook(hookData.name);
  }, [isVisible]);

  return (
    <div className="hook" id={`${name}-hook`}>
      <h2 ref={hookTitleRef}>
        {id + 1}- {name} Hook
      </h2>

      <HookExplanation
        name={name}
        explanation={explanation}
        liveCode={liveCode}
      />
      <HookInputsOutputs data={{ inputs, outputs }} />
      <HookCode code={code} />
    </div>
  );
};
export default memo(Hook);
