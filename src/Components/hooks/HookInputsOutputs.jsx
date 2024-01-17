const HookInputsOutputs = ({ data }) => {
  const { inputs, outputs } = data;

  return (
    <div className="inputs-outputs">
      <h3>Inputs</h3>
      <ul className="inputs">
        {inputs?.map((input, i) => (
          <li key={i}>
            {i + 1}- {input}
          </li>
        ))}
      </ul>

      <h3>Outputs</h3>
      <ul className="outputs">
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
