const accordion = () => {
  const chItems = document.querySelectorAll(".characteristics__item");

  const closeOpened = () => {
    const activeBtn = document.querySelector(".characteristics__title.active");
    const openedContent = document.querySelector(
      ".characteristics__description.open"
    );

    activeBtn.classList.remove("active");
    openedContent.classList.remove("open");
    openedContent.style.height = "";
  };

  chItems.forEach((item) => {
    const chButton = item.querySelector(".characteristics__title");
    const chContent = item.querySelector(".characteristics__description");

    chButton.classList.remove("active");
    chContent.classList.remove("open");

    chButton.addEventListener("click", () => {
      if (chContent.classList.contains("open")) {
        chContent.style.height = "";
      } else {
        closeOpened();
        chContent.style.height = chContent.scrollHeight + "px";
      }

      chButton.classList.toggle("active");
      chContent.classList.toggle("open");
    });
  });
};

accordion();
