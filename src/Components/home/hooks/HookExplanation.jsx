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
        {name} example
      </a>
    </div>
  );
};
export default HookExplanation;


function zoomIn(e) {
  let zoomTool = e.currentTarget;
  let offsetX = e.offsetX
  let offsetY = e.offsety

  e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
  e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX


  let positionX = offsetX / zoomTool.offsetWidth * 100
  let positionY = offsetY / zoomTool.offsetHeight * 100

  zoomTool.style.backgroundPosition = positionX + '% ' + positionY + '%';
}