import { showToast } from "./scripts.js";

export function initFileInput(fileInputEl) {
  const chooseFileButtonEl =
    fileInputEl.nextElementSibling.querySelector(".file-picker");
  const fileTextEl =
    fileInputEl.nextElementSibling.querySelector(".file-input-text");
  const clearFileInputEl =
    fileInputEl.nextElementSibling.querySelector(".clear-file-input");

  clearFileInputEl.addEventListener("click", () => {
    fileInputEl.value = "";
    fileTextEl.textContent = "";
  });

  chooseFileButtonEl.addEventListener("click", () => {
    fileInputEl.click();
  });

  let lastChosenFiles = null;
  fileInputEl.addEventListener("change", function () {
    if (this.files.length > 0) {
      if (this.files[0].size > 500000) {
        showToast("Файлът трябва да е максимум 500KB", "danger");
        return;
      }

      lastChosenFiles = this.files;
      fileTextEl.textContent = this.files[0].name;
    } else {
      this.files = lastChosenFiles;
    }
  });
}

export function fileInputToBase64(fileInputEl) {
  return new Promise((resolve, reject) => {
    const file = fileInputEl.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
  });
}

export function getFileExtension(fileInputEl) {
  return fileInputEl.files[0].name.split(".").pop();
}

var inputElements = document.querySelectorAll('input[type="file"]');
inputElements.forEach((inputEl) => initFileInput(inputEl));
