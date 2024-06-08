import {
  showToast,
  showError,
  hideError,
  WordDocumentBuilder,
} from "/scripts.js";

// Init EmailJS
emailjs.init("r56Apn_LkyZ3ohtmq");

// Form elements
const formElements = {
  form: document.getElementById("financing-form"),
  doctorName: document.getElementById("doctor-name"),
  uin: document.getElementById("uin"),
  phoneNumber: document.getElementById("phone-number"),
  email: document.getElementById("email"),

  membership: document.getElementById("membership"),
  age: document.getElementById("age"),
  specialization: document.getElementById("specialization"),
  specializationYear: document.getElementById("specialization-year"),
  scientificForums: document.getElementById("scientific-forums"),
  campaingParticipating: document.getElementById("campaing-participating"),
  doctorStudies: document.getElementById("doctor-studies"),
  dessertation: document.getElementById("dessertation"),
  certificate: document.getElementById("certificate"),
  projectApplication: document.getElementById("project-application"),

  termsOfUse: document.getElementById("terms-of-use"),

  submitButton: document.getElementById("ef-submit-btn"),
};

const defaultIndentLeft = 720;
const defaultMarginBottom = 400;
const defaultSecondaryColor = "#ae4f0e";

const indentedSettings = {
  indentLeft: defaultIndentLeft,
  marginBottom: defaultMarginBottom,
};

const secondaryTextSettings = {
  textSize: 23,
  isItalic: true,
  color: defaultSecondaryColor,
};

formElements.termsOfUse.addEventListener("change", () => {
  hideError("terms-of-use-error");
});

formElements.form.addEventListener("submit", async (e) => {
  e.preventDefault();

  hideError("form-submit-error");

  formElements.submitButton.disabled = true;

  try {
    const wordDocument = await new WordDocumentBuilder()
      .addParagraph(
        "Формуляр за кандидатстване по програма за финансиране на млади лекари:",
        {
          alignment: "center",
          isBold: true,
          isUnderline: true,
          textSize: 32,
          lineHeight: 360,
          marginBottom: defaultMarginBottom,
        }
      )
      .addParagraph(
        "1. Имате ли членство към Български лекарски съюз -  районна колегия Бургас?"
      )
      .addParagraph(`- ${formElements.membership.value}`, indentedSettings)
      .addParagraph("2. Каква е вашата възраст?")
      .addParagraph(`- ${formElements.age.value}`, indentedSettings)
      .addParagraph("3. Имате ли зачислена специализация?")
      .addParagraph(
        "(Ако имате зачислена специализация, моля уточнете какво специализирате)",
        secondaryTextSettings
      )
      .addParagraph(`- ${formElements.specialization.value}`, indentedSettings)
      .addParagraph(
        "4. Моля уточнете, в коя година от специализацията се намирате:"
      )
      .addParagraph(
        `- ${formElements.specializationYear.value}`,
        indentedSettings
      )
      .addParagraph(
        "5. Имате ли участия в научни форуми, конференции, конгреси и/или сесии през последните 2 години?"
      )
      .addParagraph(
        "(Ако имате участие в някое/някои от гореизброените, моля уточнете местата, в които сте взели участие)",
        secondaryTextSettings
      )
      .addParagraph(
        `- ${formElements.scientificForums.value}`,
        indentedSettings
      )
      .addParagraph(
        "6. Имате ли участие в кампании/дейности, организирани от Сдружение на „Младите лекари“ през последните 2 години?"
      )
      .addParagraph(
        "(Ако сте имали участие в някоя/някои от кампаниите, моля уточнете в кои)",
        secondaryTextSettings
      )
      .addParagraph(
        `- ${formElements.campaingParticipating.value}`,
        indentedSettings
      )
      .addParagraph("7. Провеждате ли докторантура?")
      .addParagraph(`- ${formElements.doctorStudies.value}`, indentedSettings)
      .addParagraph("8. Имате ли защитена дисертация?")
      .addParagraph(`- ${formElements.dessertation.value}`, indentedSettings)
      .addParagraph("9. Имате ли сертификат/и за чуждестранен език?", {
        pageBreakBefore: true,
      })
      .addParagraph(
        "(В случай, че имате - моля уточнете)",
        secondaryTextSettings
      )
      .addParagraph(`- ${formElements.certificate.value}`, indentedSettings)
      .addParagraph(
        "10. Моля уточнете проекта, за който кандидатствате за финансиране:"
      )
      .addParagraph(
        "(Назовете точна или ориентировъчна сума, която е необходима за участие в проекта, както и дата на провеждане)",
        secondaryTextSettings
      )
      .addParagraph(
        `- ${formElements.projectApplication.value}`,
        indentedSettings
      )
      .buildDocumentBase64Async();

    const data = {
      fullName: formElements.doctorName.value,
      uin: formElements.uin.value,
      phoneNumber: formElements.phoneNumber.value,
      email: formElements.email.value,
      content: wordDocument,
    };

    await emailjs.send("service_oioouhy", "template_oqqkfj9", data);
    showToast("Успешно изпратен формуляр за финансиране от фонд");
  } catch (err) {
    console.error(err);
    showError("form-submit-error");
  } finally {
    formElements.submitButton.disabled = false;
  }
});
