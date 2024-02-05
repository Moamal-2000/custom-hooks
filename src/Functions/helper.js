import JSZip from "jszip";

export function saveInFile(nameFile, contentFile) {
  const blob = new Blob([contentFile], { type: "text/plain" });
  download(blob, nameFile);
}

export function download(blob, nameFile) {
  const link = document.createElement("a");
  link.download = nameFile;
  link.href = window.URL.createObjectURL(blob);
  link.click();
  link.remove();
}

export async function saveInRAR(files) {
  const zip = new JSZip();
  files.forEach((file) => zip.file(file.name, file.code));
  const blob = await zip.generateAsync({ type: "blob" });
  download(blob, "custom-hooks.rar");
}

export const scrollToElement = (scrollToEle, scrollBehavior = "instant") => {
  if (!scrollToEle.current) return;
  const scrollEleRect = scrollToEle.current.getBoundingClientRect();
  const scrollEleY = scrollEleRect.y;

  window.scrollTo({
    top: scrollEleY + window.scrollY,
    behavior: scrollBehavior,
  });
};

export function scrollToBottom() {
  setTimeout(() => {
    window.scrollTo({
      behavior: "instant",
      top: 1000000,
    });
  }, 100);
}
