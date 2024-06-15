import s from "./HookInputsOutputs.module.scss";
import ListedSection from "./ListedSection";

const HookInputsOutputs = ({ data: { inputs, outputs } }) => {
  return (
    <article className={s.inputsOutputs}>
      <ListedSection listData={inputs} name="Inputs" />
      <ListedSection listData={outputs} name="Outputs" />
    </article>
  );
};

export default HookInputsOutputs;
