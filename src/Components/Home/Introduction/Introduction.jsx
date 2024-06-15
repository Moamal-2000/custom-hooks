import introImage from "src/Assets/Images/introduction-image.webp";
import { useHooksContext } from "../../../Context/HooksContext";
import s from "./Introduction.module.scss";

const Introduction = () => {
  const { numberOfHooks } = useHooksContext();

  return (
    <article className={s.introduction}>
      <h1>
        <strong>Explore {numberOfHooks} Custom Hooks in React!</strong>
      </h1>

      <div className={s.introImageWrapper}>
        <img
          fetchpriority="high"
          src={introImage}
          alt="React logo at the left side and text at the right side: 'Custom Hook useFetch'."
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
