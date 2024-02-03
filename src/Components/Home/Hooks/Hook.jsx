import { memo } from "react";
import styles from "./Hook.module.scss";
import HookCode from "./HookCode";
import HookExplanation from "./HookExplanation";
import HookInputsOutputs from "./HookInputsOutputs";

const Hook = ({ hookData }) => {
  const { name, inputs, outputs } = hookData;

  return (
    <div className={styles.hook} id={`${name}-hook`}>
      <HookExplanation hookData={hookData} />

      <HookInputsOutputs data={{ inputs, outputs }} />
      <HookCode hookData={hookData} />
    </div>
  );
};
export default memo(Hook);
