import HookCode from "./HookCode";
import HookExplanation from "./HookExplanation";
import HookInputsOutputs from "./HookInputsOutputs";

const Hook = ({ hookData }) => {
  const { name, explanation, liveCode, inputs, outputs, id, code } = hookData;

  return (
    <div className="hook">
      <h2>{id+1}- {name} Hook</h2>

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
export default Hook;
