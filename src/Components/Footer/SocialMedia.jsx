import styles from "./SocialMedia.module.scss";

const SocialMedia = () => {
  return (
    <div className={styles.SocialMedia}>
      <SocialMediaIcon
        classIcon={`fa-brands fa-github ${styles.github}`}
        href="https://github.com/Moamal-2000"
        title="Github"
      />

      <SocialMediaIcon
        classIcon={`fa-brands fa-linkedin-in ${styles.linkedIn}`}
        href="https://www.linkedin.com/in/moamal-alaa-a4bb15237/"
        title="Linkedin"
      />

      <SocialMediaIcon
        classIcon={`fa-brands fa-codepen ${styles.codePen}`}
        href="https://codepen.io/moamal-2000"
        title="Codepen"
      />

      <SocialMediaIcon
        classIcon={`fa-brands fa-facebook-f ${styles.facebook}`}
        href="https://www.facebook.com/MoamalAlaa109"
        title="Facebook"
      />

      <SocialMediaIcon
        classIcon={`fa-regular fa-envelope`}
        href="mailto:moamalalaapro1@gmail.com"
        title="Send Mail"
      />
    </div>
  );
};

export default SocialMedia;

const SocialMediaIcon = ({ classIcon, href, title }) => {
  return (
    <button className={styles.buttonIcon} title={title}>
      <a href={href} target="_blank" tabIndex="-1">
        <i className={classIcon}></i>
      </a>
    </button>
  );
};
