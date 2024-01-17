const HookExplanation = ({ name, explanation, liveCode }) => {
  return (
    <div className="explanation">
      {explanation?.map((explain, i) => (
        <p className="hook-paragraph" key={i}>{explain}</p>
      ))}

      <a href={liveCode} target="_blank">
        {name} example
      </a>
    </div>
  );
};
export default HookExplanation;
