import { socialMediaLinks } from "src/Data/staticData";
import { myName } from "src/Data/variables";
import s from "./FooterText.module.scss";

const FooterText = () => {
  const [github, linkedin] = socialMediaLinks;
  const customHooksRepo = `${github.href}/custom-hooks`;

  return (
    <div className={s.text}>
      <div className={s.subject}>
        <p>
          <span>The website designed and coded by</span>
          <a href={linkedin.href} target="_blank">
            {myName}
          </a>
        </p>

        <p>
          <span>
            If you found this helpful, show your support by starring the
            repository on
          </span>
          <a href={customHooksRepo} target="_blank">
            GitHub
          </a>
        </p>
      </div>

      <div className={s.subject}>
        <p>
          <span>
            These custom hooks were developed with insights and inspiration from
          </span>

          <a
            href="https://github.com/WebDevSimplified/useful-custom-react-hooks/tree/main/src"
            className="noPaddingRight"
            target="_blank"
          >
            WebDevSimplified
          </a>

          <span>,</span>

          <a
            href="https://dev.to/arafat4693/15-useful-react-custom-hooks-that-you-can-use-in-any-project-2ll8"
            className="noPaddingRight"
            target="_blank"
          >
            dev.to
          </a>

          <span>,</span>

          <a
            href="https://blog.bitsrc.io/11-useful-custom-react-hooks-for-your-next-app-c66307cf0f0c"
            className="noPaddingRight"
            target="_blank"
          >
            blog.bitsrc
          </a>

          <span>, and</span>

          <a href="https://chat.openai.com" target="_blank">
            ChatGPT.
          </a>
        </p>
      </div>
    </div>
  );
};

export default FooterText;
