export function saveInFile(nameFile, contentFile) {
  const blob = new Blob([contentFile], { type: "text/plain" });

  const link = document.createElement('a');
  link.download = nameFile;
  link.href = window.URL.createObjectURL(blob);
  link.click();
};