const SkipContentLink = ({ scrollTo }) => {
  return (
    <a href={`#${scrollTo}`} className="skip-content" tabIndex="0">
      Skip to main content
    </a>
  );
};

export default SkipContentLink;
