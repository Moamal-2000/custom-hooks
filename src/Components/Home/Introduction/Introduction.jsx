import introImage from "../../../Assets/Images/introduction-image.webp";
import { useGlobalContext } from "../../../Context/GlobalContext";
import styles from "./Introduction.module.scss";

const Introduction = () => {
  const { numberOfHooks } = useGlobalContext();

  return (
    <article className={styles.introduction}>
      <h1>
        <strong>Exploring {numberOfHooks} Custom Hooks in React</strong>
      </h1>

      <div className={styles.introImageWrapper}>
        <img
          fetchpriority="high"
          src={introImage}
          width="875"
          height="365"
          alt="an image showing react logo at the right side and text at the right side. the text is Custom Hook useFetch"
        />
      </div>

      <section>
        <h2>
          <strong>What are Custom Hooks?</strong>
        </h2>
        <p>
          <a
            href="https://react.dev/learn/reusing-logic-with-custom-hooks"
            target="_blank"
            className="linkStyle1"
          >
            Custom Hooks
          </a>
          in React allow you to extract and reuse logic from
          <a
            href="https://react.dev/reference/react/Component"
            target="_blank"
            className="linkStyle1 noMarginRight"
          >
            components
          </a>
          , making your code more modular and maintainable. They are functions
          that can encapsulate complex behavior and be shared across different
          components.
        </p>
      </section>

      <section>
        <h2>Navigating the Hooks</h2>
        <p>
          Navigating the Hooks Here, we present {numberOfHooks} custom hooks
          designed to enhance your React development experience. Each hook
          addresses specific use cases, providing solutions to common challenges
          in building robust and efficient React applications.
        </p>
      </section>
    </article>
  );
};
export default Introduction;
