import styles from "./Footer.module.scss";
import FooterText from "./FooterText";
import SocialMedia from "./SocialMedia";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <FooterText />
      <SocialMedia />
    </footer>
  );
};
export default Footer;
