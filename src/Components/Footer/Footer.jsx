import s from "./Footer.module.scss";
import FooterText from "./FooterText";
import SocialMedia from "./SocialMedia/SocialMedia";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <FooterText />
      <SocialMedia />
    </footer>
  );
};
export default Footer;
