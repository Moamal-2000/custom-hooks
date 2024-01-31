export function handleFlipScrollIcon(buttonIconRef) {
  if (!buttonIconRef.current) return;

  const { isUserScrolledToTop } = scrollCalculations();

  buttonIconRef.current.style.transform = `rotate(${
    isUserScrolledToTop ? ".5" : "5.0"
  }turn)`;
}

export function scrollCalculations() {
  const documentHeight = Number.parseInt(
    document.documentElement.offsetHeight.toFixed(0)
  );
  const halfDocumentHeight = documentHeight / 2;
  const scrollY = Number.parseInt(window.scrollY.toFixed(0));
  const isUserScrolledToTop = halfDocumentHeight > scrollY;
  const scrollToY = isUserScrolledToTop ? documentHeight : 0;

  return { scrollToY, isUserScrolledToTop };
}

export function enterFullScreen() {
  const htmlElement = document.documentElement;

  if (htmlElement.requestFullscreen) htmlElement.requestFullscreen();
  else if (htmlElement.mozRequestFullScreen) htmlElement.mozRequestFullScreen();
  else if (htmlElement.webkitRequestFullscreen)
    htmlElement.webkitRequestFullscreen();
  else if (htmlElement.msRequestFullscreen) htmlElement.msRequestFullscreen();
}
