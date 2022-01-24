const sendForm = () => {
  const openModalBtn = document.querySelector(".card-details__button_delivery");
  const cardDetailsTitle = document.querySelector(".card-details__title");
  const modal = document.querySelector(".modal");
  const modalTitle = modal.querySelector(".modal__title");
  const modalCloseBtn = modal.querySelector(".modal__close");
  const modalForm = modal.querySelector("form");

  openModalBtn.addEventListener("click", () => {
    modal.style.display = "flex";
    modalTitle.textContent = cardDetailsTitle.textContent;
  });

  modalCloseBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      modal.style.display = "none";
    }
  });

  modal.addEventListener("click", (event) => {
    console.log(event.target);
    if (event.target.closest(".modal__block") === null) {
      modal.style.display = "none";
    }
  });

  modalForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const labels = modal.querySelectorAll(".modal__label");

    const sendMessage = {};

    labels.forEach((label) => {
      const span = label.querySelector("span");
      const input = label.querySelector("input");

      sendMessage[span.textContent] = input.value;

      input.value = "";
    });

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(sendMessage),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then(() => {
      console.log("asd");
    });

    modal.style.display = "none";
  });
};

sendForm();
