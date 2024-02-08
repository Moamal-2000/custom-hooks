import SvgIcon from "../Shared/MiniComponents/SvgIcon";
import styles from "./SocialMedia.module.scss";

const SocialMedia = () => {
  return (
    <div className={styles.SocialMedia}>
      <SocialMediaIcon
        icon={<SvgIcon name="github" />}
        href="https://github.com/Moamal-2000"
        title="Github"
      />

      <SocialMediaIcon
        icon={<SvgIcon name="linkedin" />}
        href="https://www.linkedin.com/in/moamal-alaa-a4bb15237/"
        title="Linkedin"
      />

      <SocialMediaIcon
        icon={<SvgIcon name="codepen" />}
        href="https://codepen.io/moamal-2000"
        title="Codepen"
      />

      <SocialMediaIcon
        icon={<SvgIcon name="facebook" />}
        href="https://www.facebook.com/MoamalAlaa109"
        title="Facebook"
      />

      <SocialMediaIcon
        icon={<SvgIcon name="email" />}
        href="mailto:moamalalaapro1@gmail.com"
        title="Send Mail"
      />
    </div>
  );
};

export default SocialMedia;

const SocialMediaIcon = ({ icon, href, title }) => {
  return (
    <button className={styles.buttonIcon}>
      <a href={href} target="_blank" tabIndex="-1" title={title}>
        {icon}
      </a>
    </button>
  );
};
