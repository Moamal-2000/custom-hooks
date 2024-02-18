import { memo, useEffect } from "react";
import styles from "./Hook.module.scss";
import HookCode from "./HookCode";
import HookExplanation from "./HookExplanation";
import HookInputsOutputs from "./HookInputsOutputs";

const Hook = ({ hookData }) => {
  const { name, inputs, outputs } = hookData;

  useEffect(() => {
    console.log(document.body.innerText.includes("[object Object]"));
    if (document.body.innerText.includes("[object Object]")) {
      location.reload()
    }
  }, [])

  return (
    <article className={styles.hook} id={`${name}-hook`}>
      <HookExplanation hookData={hookData} />
      <HookInputsOutputs data={{ inputs, outputs }} />
      <HookCode hookData={hookData} />
    </article>
  );
};
export default memo(Hook);
