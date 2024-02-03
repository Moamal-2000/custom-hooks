import styles from "./HookInputsOutputs.module.scss";

const HookInputsOutputs = ({ data: { inputs, outputs } }) => {
  const isInputsExist = inputs.length !== 0;
  const isOutputsExist = outputs.length !== 0;

  const inputsList = inputs.map((input, index) => (
    <li key={`input-${index}`}>
      {index + 1}- {input}
    </li>
  ));

  const outputsList = outputs.map((output, index) => (
    <li key={`output-${index}`}>
      {index + 1}- {output}
    </li>
  ));

  return (
    <div className={styles.inputsOutputs}>
      {isInputsExist && (
        <section>
          <h3>Inputs:</h3>
          <ul className={styles.inputs}>{inputsList}</ul>
        </section>
      )}

      {isOutputsExist && (
        <section>
          <h3>Outputs:</h3>
          <ul className={styles.outputs}>{outputsList}</ul>
        </section>
      )}
    </div>
  );
};

export default HookInputsOutputs;
