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
}

export async function saveInRAR(files) {
  const zip = new JSZip();

  files.forEach((file) => zip.file(file.name, file.content));

  const blob = await zip.generateAsync({ type: "blob" });
  download(blob, "custom-hooks.rar");
}

export function getMoreData(entireData, currentDataNumber, neededDataNumber) {
  const returnedData = [];

  for (let i = currentDataNumber; i < neededDataNumber; i++) {
    if (entireData?.[i]) returnedData.push(entireData?.[i]);
  }

  return returnedData;
}
