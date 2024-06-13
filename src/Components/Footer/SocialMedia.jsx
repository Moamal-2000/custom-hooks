import { socialMediaLinks } from "src/Data/staticData";
import SvgIcon from "../Shared/MiniComponents/SvgIcon";
import s from "./SocialMedia.module.scss";

const SocialMedia = () => {
  return (
    <div className={s.SocialMedia}>
      {socialMediaLinks.map(({ icon, href, title }) => (
        <SocialMediaLink
          key={title}
          icon={<SvgIcon name={icon} />}
          href={href}
          title={title}
        />
      ))}
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
