import styles from "./HookExplanation.module.scss";
import HookName from "./HookName";

const HookExplanation = ({ hookData }) => {
  const { explanation, liveCode } = hookData;

  return (
    <div className={styles.explanation}>
      <HookName hookData={hookData} />

      {explanation?.map((explain, i) => (
        <p className={styles.hookParagraph} key={i}>
          {explain}
        </p>
      ))}

      {!liveCode && (
        <a href={liveCode} target="_blank" className="linkStyle1">
          Explore an interactive demo of {name}.
        </a>
      )}
    </div>
  );
};
export default HookExplanation;
