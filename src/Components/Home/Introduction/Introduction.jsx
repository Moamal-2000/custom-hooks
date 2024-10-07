import introImage from "src/Assets/Images/introduction-image.webp";
import { NUMBER_OF_HOOKS } from "src/Data/variables";
import s from "./Introduction.module.scss";

const Introduction = () => {
  return (
    <article className={s.introduction}>
      <h1>
        <strong>Explore {NUMBER_OF_HOOKS} Custom Hooks For React!</strong>
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
          &nbsp;in React allow you to extract and reuse logic from&nbsp;
          <a
            href="https://react.dev/reference/react/Component"
            target="_blank"
            className="linkStyle1"
          >
            components
          </a>
          , making your code more modular and maintainable. They are
          functionsthat can encapsulate complex behavior and be shared across
          differentcomponents.
        </p>
      </section>

      <section>
        <h2>Navigating the Hooks</h2>
        <p>
          Navigating the Hooks Here, we present {NUMBER_OF_HOOKS} custom hooks
          designed to enhance your React development experience. Each hook
          addresses specific use cases, providing solutions to common challenges
          in building robust and efficient React applications.
        </p>
      </section>
    </article>
  );
};
export default Introduction;
