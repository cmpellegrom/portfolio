function openModal(title, description, pdfLink = "", zipLink = "") {
  const modal = document.getElementById("projectModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalDescription = document.getElementById("modalDescription");
  const modalPdfLink = document.getElementById("modalPdfLink");
  const modalZipLink = document.getElementById("modalZipLink");

  if (!modal || !modalTitle || !modalDescription) {
    return;
  }

  modalTitle.textContent = title;
  modalDescription.textContent = description;

  if (modalPdfLink) {
    if (pdfLink) {
      modalPdfLink.href = pdfLink;
      modalPdfLink.style.display = "inline-block";
    } else {
      modalPdfLink.href = "#";
      modalPdfLink.style.display = "none";
    }
  }

  if (modalZipLink) {
    if (zipLink) {
      modalZipLink.href = zipLink;
      modalZipLink.style.display = "inline-block";
    } else {
      modalZipLink.href = "#";
      modalZipLink.style.display = "none";
    }
  }

  modal.style.display = "block";
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal(event) {
  const modal = document.getElementById("projectModal");

  if (!modal) {
    return;
  }

  if (event) {
    if (event.target === modal) {
      modal.style.display = "none";
      modal.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    }
  } else {
    modal.style.display = "none";
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});