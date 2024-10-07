import s from "./HookExplanation.module.scss";
import HookName from "./HookName";

const HookExplanation = ({ hookData }) => {
  const { explanation, liveCode, name } = hookData;

  return (
    <section className={s.explanation}>
      <HookName hookData={hookData} />

      {explanation?.map((explanationText, i) => (
        <p className={s.hookParagraph} key={i}>
          {explanationText}
        </p>
      ))}

      {liveCode && (
        <a href={liveCode} target="_blank" className="linkStyle1">
          Explore an interactive demo of {name} hook.
        </a>
      )}
    </section>
  );
};
export default HookExplanation;
