import styles from "./Footer.module.scss";
import SocialMedia from "./SocialMedia";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.text}>
        <p>
          <span>This website designed and coded by</span>
          <a
            href="https://www.linkedin.com/in/moamal-alaa-a4bb15237"
            target="_blank"
          >
            Moamal Alaa
          </a>
        </p>

        <p>
          <span>
            If you found this helpful, show your support by starring the
            repository on
          </span>
          <a href="https://github.com/Moamal-2000/custom-hooks" target="_blank">
            GitHub.
          </a>
        </p>
      </div>

      <SocialMedia />
    </footer>
  );
};
export default Footer;
