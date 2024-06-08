const doctorsDescription = document.querySelectorAll(".doctor-description");
const screenWidthToCheck = window.innerWidth > 768 ? 238 : 500;

doctorsDescription.forEach((description) => {
  if (description.clientHeight < screenWidthToCheck) {
    const parent = description.closest("section");
    const buttonWrap = parent.querySelector(".read-more-btn-container");
    buttonWrap.remove();
  }
});

const showDescriptionButtons = document.querySelectorAll(
  "#show-description-btn"
);

showDescriptionButtons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    const doctorDescriptionEl = e.target
      .closest("section")
      .querySelector(".doctor-description");

    if (doctorDescriptionEl) {
      doctorDescriptionEl.removeAttribute("class");
      e.target.closest("div").remove();
    }
  });
});
