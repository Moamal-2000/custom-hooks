const htmlElement = document.documentElement;

export function handleFlipScrollIcon(buttonIconRef) {
  if (!buttonIconRef.current) return;
  const { isUserScrolledToTop } = scrollCalculations();
  const turnValue = isUserScrolledToTop ? ".5" : "5.0";

  buttonIconRef.current.style.transform = `rotate(${turnValue}turn)`;
}

export function scrollCalculations() {
  const documentHeight = Number.parseInt(htmlElement.offsetHeight.toFixed(0)),
    halfDocumentHeight = documentHeight / 2,
    scrollY = Number.parseInt(window.scrollY.toFixed(0)),
    isUserScrolledToTop = halfDocumentHeight > scrollY,
    scrollToY = isUserScrolledToTop ? documentHeight : 0;

  return { scrollToY, isUserScrolledToTop };
}

export function enterFullScreen() {
  if (htmlElement.requestFullscreen) htmlElement.requestFullscreen();
  else if (htmlElement.mozRequestFullScreen) htmlElement.mozRequestFullScreen();
  else if (htmlElement.webkitRequestFullscreen)
    htmlElement.webkitRequestFullscreen();
  else if (htmlElement.msRequestFullscreen) htmlElement.msRequestFullscreen();
}

export function toggleDarkModeColors(isDarkMode) {
  if (isDarkMode) {
    htmlElement.style.setProperty("--extra-dark-blue", "#eee");
    htmlElement.style.setProperty("--white", "#070b10");
    htmlElement.style.setProperty("--secondary-black", "#fff");
    htmlElement.style.setProperty("--very-light-gray", "#2b2b2b");
    htmlElement.style.setProperty("--dark-gray-opacity5", "#2483ff");
    htmlElement.style.setProperty("--secondary-white", "#2b2b2b");
    return;
  }

  htmlElement.style.setProperty("--extra-dark-blue", "#0a1119");
  htmlElement.style.setProperty("--white", "#fff");
  htmlElement.style.setProperty("--secondary-black", "#2b2b2b");
  htmlElement.style.setProperty("--very-light-gray", "#f0f0f0");
  htmlElement.style.setProperty("--dark-gray-opacity5", "rgba(69, 69, 69, .5)");
  htmlElement.style.setProperty("--secondary-white", "#eee");
}
