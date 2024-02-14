import { filterFromToIndex } from "./helper";

const htmlElement = document.documentElement;

export function scrollCalculations() {
  const documentHeight = Number.parseInt(htmlElement.offsetHeight.toFixed(0)),
    halfDocumentHeight = documentHeight / 2,
    scrollY = Number.parseInt(window.scrollY.toFixed(0)),
    isUserScrolledToTop = halfDocumentHeight + 2 > scrollY,
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

export function getPageData(data, pageNumber, itemsPerPage = 5) {
  const totalHooks = data.length;
  const startIndex = (pageNumber - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage - 1, totalHooks - 1);
  const { data: pageData, indexes } = filterFromToIndex(
    startIndex,
    endIndex,
    data
  );

  return { pageData, indexes };
}
