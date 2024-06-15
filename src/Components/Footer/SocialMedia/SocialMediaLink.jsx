const SocialMediaLink = ({ icon, href, title }) => {
  return (
    <a href={href} target="_blank" title={title}>
      {icon}
    </a>
  );
};

export default SocialMediaLink;
