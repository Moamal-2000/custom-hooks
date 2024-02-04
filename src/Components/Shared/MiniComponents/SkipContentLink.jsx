const SkipContentLink = ({ scrollTo }) => {
  return (
    <a href={`#${scrollTo}`} className="skip-content" tabIndex="1">
      Skip to main content
    </a>
  );
};

export default SkipContentLink;
