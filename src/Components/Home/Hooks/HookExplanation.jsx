import styles from "./HookExplanation.module.scss";

const HookExplanation = ({ name, explanation, liveCode }) => {
  return (
    <div className={styles.explanation}>
      {explanation?.map((explain, i) => (
        <p className={styles.hookParagraph} key={i}>
          {explain}
        </p>
      ))}

      <a href={liveCode} target="_blank" className="linkStyle1">
        Explore an interactive demo of {name}.
      </a>
    </div>
  );
};
export default HookExplanation;
