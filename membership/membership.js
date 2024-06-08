import { showToast, hideError, showError } from "/scripts.js";
import { fileInputToBase64, getFileExtension } from "/form-inputs.js";

// Init EmailJS
emailjs.init("r56Apn_LkyZ3ohtmq");

// Form elements
const formElements = {
  form: document.getElementById("membership-form"),
  firstName: document.getElementById("first-name"),
  secondName: document.getElementById("second-name"),
  lastName: document.getElementById("last-name"),
  phoneNumber: document.getElementById("phone-number"),
  email: document.getElementById("email"),
  uin: document.getElementById("uin"),
  additionalInfo: document.getElementById("additional-info"),
  isStudent: document.getElementById("is-student"),
  document: document.getElementById("document"),

  submitButton: document.getElementById("membership-submit-btn"),
};

formElements.isStudent.addEventListener("change", () => {
  formElements.uin.closest("div[class*=col-]").style.display = formElements
    .isStudent.checked
    ? "none"
    : "block";

  formElements.uin.required = !formElements.isStudent.checked;
  formElements.uin.value = "";
});

formElements.form.addEventListener("submit", async (e) => {
  e.preventDefault();

  hideError("form-submit-error");
  if (formElements.document.files.length === 0) {
    showError("document-error");
    return;
  }

  formElements.submitButton.disabled = true;

  const dataRecord = {
    firstName: formElements.firstName.value,
    secondName: formElements.secondName.value,
    lastName: formElements.lastName.value,
    phoneNumber: formElements.phoneNumber.value,
    email: formElements.email.value,
    uin: formElements.uin.value,
    additionalInfo: formElements.additionalInfo.value,
    isStudent: formElements.isStudent.checked ? "Да" : "Не",
    document: await fileInputToBase64(formElements.document),
    documentExtension: getFileExtension(formElements.document),
  };

  try {
    await emailjs.send("service_oioouhy", "template_lrgywhk", dataRecord);
    showToast("Успешно изпратен формуляр за членство");
  } catch (err) {
    console.log(err);
    showError("form-submit-error");
  } finally {
    formElements.submitButton.disabled = false;
  }
});
