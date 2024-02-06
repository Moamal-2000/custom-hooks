import styles from "./HookInputsOutputs.module.scss";
import ListedSection from "./ListedSection";

const HookInputsOutputs = ({ data: { inputs, outputs } }) => {
  return (
    <article className={styles.inputsOutputs}>
      <ListedSection listData={inputs} name="Inputs" />
      <ListedSection listData={outputs} name="Outputs" />
    </article>
  );
};

export default HookInputsOutputs;
