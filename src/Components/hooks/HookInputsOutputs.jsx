import styles from "./HookInputsOutputs.module.scss"

const HookInputsOutputs = ({ data }) => {
  const { inputs, outputs } = data;
  const isInputsExist = inputs.length !== 0;
  const isOutputsExist = outputs.length !== 0;

  return (
    <div className={styles.inputsOutputs}>
      {isInputsExist && <h3>Inputs:</h3>}

      <ul className={styles.inputs}>
        {inputs?.map((input, i) => (
          <li key={i}>
            {i + 1}- {input}
          </li>
        ))}
      </ul>

      {isOutputsExist && <h3>Outputs:</h3>}

      <ul className={styles.outputs}>
        {outputs?.map((output, i) => (
          <li key={i}>
            {i + 1}- {output}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default HookInputsOutputs;
