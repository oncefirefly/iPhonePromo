const scroll = () => {
  const links = document.querySelectorAll(".header-menu__item a");
  const detailsLink = document.querySelector(
    ".card-details__link-characteristics"
  );

  seamless.polyfill();

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      const id = link.getAttribute("href").substring(1);
      const section = document.getElementById(id);

      if (section) {
        seamless.scrollIntoView(section, {
          behavior: "smooth",
          block: "start",
        });
      } else {
        seamless.elementScrollIntoView(
          document.querySelector("#characteristics"),
          {
            behavior: "smooth",
            block: "center",
            inline: "center",
          }
        );
      }
    });

    detailsLink.addEventListener("click", (event) => {
      event.preventDefault();

      const detailsId = detailsLink.getAttribute("href").substring(1);
      const detailsSection = document.getElementById(detailsId);

      seamless.scrollIntoView(detailsSection, {
        behavior: "smooth",
        block: "start",
      });
    });
  });
};

scroll();
