import { memo } from "react";
import HookExplanation from "../HookExplanation/HookExplanation";
import HookInputsOutputs from "../HookExplanation/HookInputsOutputs";
import s from "./Hook.module.scss";
import HookCode from "./HookCode";

const Hook = ({ hookData }) => {
  const { name, inputs, outputs } = hookData;

  return (
    <article className={s.hook} id={`${name}-hook`}>
      <HookExplanation hookData={hookData} />
      <HookInputsOutputs data={{ inputs, outputs }} />
      <HookCode hookData={hookData} />
    </article>
  );
};
export default memo(Hook);
