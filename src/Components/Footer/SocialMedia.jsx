import SvgIcon from "../Shared/MiniComponents/SvgIcon";
import s from "./SocialMedia.module.scss";

const SocialMedia = () => {
  return (
    <div className={s.SocialMedia}>
      <SocialMediaLink
        icon={<SvgIcon name="github" />}
        href="https://github.com/Moamal-2000"
        title="Github"
      />

      <SocialMediaLink
        icon={<SvgIcon name="linkedin" />}
        href="https://www.linkedin.com/in/moamal-alaa-a4bb15237"
        title="Linkedin"
      />

      <SocialMediaLink
        icon={<SvgIcon name="codepen" />}
        href="https://codepen.io/moamal-2000"
        title="Codepen"
      />

      <SocialMediaLink
        icon={<SvgIcon name="facebook" />}
        href="https://www.facebook.com/MoamalAlaa109"
        title="Facebook"
      />

      <SocialMediaLink
        icon={<SvgIcon name="email" />}
        href="mailto:moamalalaapro1@gmail.com"
        title="Send me an email"
      />
    </div>
  );
};

export default SocialMedia;

const SocialMediaLink = ({ icon, href, title }) => {
  return (
    <a className={s.socialLink} href={href} target="_blank" title={title}>
      {icon}
    </a>
  );
};
