window.addEventListener("DOMContentLoaded", () => {
  const navbar = createElement(` 
<nav class="navbar navbar-expand-xl navbar-light bg-light py-0 pe-xl-4 pe-1">
    <a href="/" class="navbar-brand ps-3 me-0">
        <h1 class="text-white m-0">Младите лекари</h1>
    </a>
    <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
        <div class="navbar-nav ms-auto">
            <a href="/about-us" class="nav-link nav-item active ms-auto">За нас</a>
            <a href="/statute" class="nav-link nav-item ms-auto">Устав</a>
            <a href="/membership" class="nav-link nav-item ms-auto">Членство</a>
            <a href="/health-blog" class="nav-link nav-item ms-auto pe-none">Здравен блог</a>
            <li class="nav-item dropdown ms-auto pe-none">
                <a class="nav-link dropdown-toggle"
                 href="#"
                 role="button" 
                 data-bs-toggle="dropdown" 
                 aria-expanded="false">
                    Инициативи
                </a>
                <ul class="dropdown-menu">
                    <li>
                        <a href="/upcoming-initiatives" class="dropdown-item">Предстоящи инициативи</a>
                    </li>
                    <li><hr class="dropdown-divider" /></li>
                    <li>
                        <a href="/past-initiatives" class="dropdown-item">Изминали инициативи</a>
                    </li>
                </ul>
            </li>
            <a href="/media-about-us" class="nav-link nav-item ms-auto">Медиите за нас</a>
            <a href="/financing" class="nav-link nav-item ms-auto">Финансиране</a>
        </div>
    </div>
</nav>`);

  const footer = createElement(`
 <div class="container-fluid bg-dark footer">
        <div class="container py-5">
            <div class="row g-5">
                <div class="col-lg-4 col-md-6 mt-4">
                    <h5 class="text-white mb-3 text-decoration-underline">Свържете се с нас</h5>
                    <p class="mb-2">
                        <i class="fa-solid fa-map-location-dot footer-contact-icon"></i>
                        <a class="footer-contact-text" target="_blank" href="https://goo.gl/maps/mzR1NU7TuN5WG1pN6">
                            Комплекс "Славейков", бл.126, партер 11А, Burgas, Bulgaria, 8018
                        </a>
                    </p>
                    <p class="mb-2">
                        <i class="fa-solid fa-phone footer-contact-icon"></i>
                        <a class="footer-contact-text" href="tel:088 338 9414">
                            088 338 9414
                        </a>
                    </p>
                    <p class="mb-2">
                        <i class="fa-solid fa-envelope footer-contact-icon"></i>
                        <a class="footer-contact-text" href="mailto:junior.doctors.burgas@gmail.com">
                            junior.doctors.burgas@gmail.com
                        </a>
                    </p>
                    <div class="d-flex gap-3 pt-3">
                        <a class="footer-social-network-btn" target="_blank"
                            href="https://www.facebook.com/profile.php?id=100088412313475">
                            <i class="fa-brands fa-facebook"></i>
                        </a>
                        <a class="footer-social-network-btn" href="">
                            <i class="fa-brands fa-instagram"></i>
                        </a>
                        <a class="footer-social-network-btn" href="">
                            <i class="fa-brands fa-youtube"></i>
                        </a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mt-4">
                    <h5 class="text-white mb-3 text-decoration-underline">Бързи линкове</h5>
                    <div class="d-flex align-items-center">
                        <i class="fa-solid fa-circle-right _color-secondary"></i>
                        <a href="/about-us" class="btn btn-link ms-1 mb-0">За нас</a>
                    </div>
                    <div class="d-flex align-items-center">
                        <i class="fa-solid fa-circle-right _color-secondary"></i>
                        <a href="/statute" class="btn btn-link ms-1 mb-0">Устав</a>
                    </div>
                    <div class="d-flex align-items-center">
                        <i class="fa-solid fa-circle-right _color-secondary"></i>
                        <a href="/membership" class="btn btn-link ms-1 mb-0">Членство</a>
                    </div>
                    <div class="d-flex align-items-center">
                        <i class="fa-solid fa-circle-right _color-secondary"></i>
                        <a href="/health-blog" class="btn btn-link ms-1 mb-0">Здравен блог</a>
                    </div>
                    <div class="d-flex align-items-center">
                        <i class="fa-solid fa-circle-right _color-secondary"></i>
                        <a href="/upcoming-initiatives" class="btn btn-link ms-1 mb-0">
                            Предстоящи инициативи
                        </a>
                    </div>
                    <div class="d-flex align-items-center">
                        <i class="fa-solid fa-circle-right _color-secondary"></i>
                        <a href="/past-initiatives" class="btn btn-link ms-1 mb-0">
                            Изминали инициативи
                        </a>
                    </div>
                    <div class="d-flex align-items-center">
                        <i class="fa-solid fa-circle-right _color-secondary"></i>
                        <a href="/media-about-us" class="btn btn-link ms-1 mb-0">
                            Медиите за нас
                        </a>
                    </div>
                    <div class="d-flex align-items-center">
                        <i class="fa-solid fa-circle-right _color-secondary"></i>
                        <a href="/financing" class="btn btn-link ms-1 mb-0">
                            Финансиране
                        </a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mt-4">
                   <h5 class="text-white mb-3 text-decoration-underline">Условия и правила</h5>
                    <div class="d-flex align-items-center">
                        <i class="fa-solid fa-circle-right _color-secondary"></i>
                        <a href="/statute" class="btn btn-link ms-1 mb-0">Устав</a>
                    </div>
                     <div class="d-flex align-items-center">
                        <i class="fa-solid fa-circle-right _color-secondary"></i>
                        <a href="/terms-of-use" class="btn btn-link ms-1 mb-0">Общи условия</a>
                    </div>
                     <div class="d-flex align-items-center">
                        <i class="fa-solid fa-circle-right _color-secondary"></i>
                        <a href="/privacy-policy" class="btn btn-link ms-1 mb-0">Политика за поверителност</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
`);

  // Replace the navbar and footer elements with the actual ones for every page
  document.body.replaceChild(navbar, document.getElementById("navbar"));
  document.body.replaceChild(footer, document.getElementById("footer"));

  // Initiate the wowjs
  new WOW().init();
});

function createElement(html) {
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.firstElementChild;
}

export function showToast(message, type = "success") {
  const toast = document.getElementById("toast-message");
  if (!toast) {
    const toastEl = createElement(`    
    <div id="toast-message" class="toast-container position-fixed p-3">
            <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header text-white bg-${type}">
                <strong class="me-auto">Младите лекари</strong>
                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div class="toast-body">
                ${message}
            </div>
        </div>
    </div>`);

    document.body.appendChild(toastEl);
  }

  const toastLive = document.getElementById("liveToast");
  const bootstrapToast = new bootstrap.Toast(toastLive);
  bootstrapToast.show();
}

export function showError(errorElId, isCentered = false) {
  const errorEl = document.getElementById(errorElId);
  if (isCentered) {
    errorEl.style.display = "flex";
    errorEl.style.justifyContent = "center";
  } else {
    errorEl.style.display = "block";
  }
}

export function hideError(errorElId) {
  document.getElementById(errorElId).style.display = "none";
}

export class WordDocumentBuilder {
  #sections = null;

  constructor() {
    this.#sections = [
      {
        properties: {},
        children: [],
      },
    ];
  }

  addParagraph(text, options = {}) {
    const {
      textSize = 28,
      color,
      isItalic,
      isBold,
      isUnderline,
      alignment,
      lineHeight,
      marginBottom,
      indentLeft,
      pageBreakBefore,
    } = options;

    const paragraphText = new docx.TextRun({
      text: text,
      size: textSize,
      color: color,
      italics: isItalic,
      bold: isBold,
      underline: isUnderline,
    });

    const paragraph = new docx.Paragraph({
      alignment: alignment,
      spacing: {
        line: lineHeight,
        after: marginBottom,
      },
      indent: {
        left: indentLeft,
      },
      pageBreakBefore: pageBreakBefore,
      children: [paragraphText],
    });

    this.#sections[0].children.push(paragraph);
    return this;
  }

  addImage(dataURL, width, height) {
    const image = new docx.ImageRun({
      data: dataURL,
      transformation: {
        width: width,
        height: height,
      },
    });

    const paragraph = new docx.Paragraph({
      children: [image],
    });

    this.#sections[0].children.push(paragraph);
    return this;
  }

  async buildDocumentBase64Async() {
    const doc = new docx.Document({ sections: this.#sections });
    const blob = await docx.Packer.toBase64String(doc);
    return blob;
  }
  async buildDocumentBlobAsync() {
    const doc = new docx.Document({ sections: this.#sections });
    const blob = await docx.Packer.toBlob(doc);
    return blob;
  }
}
