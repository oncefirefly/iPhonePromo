const smoothScroll = () => {
  const links = document.querySelectorAll(".header-menu__item a");
  const detailsLink = document.querySelector(
    ".card-details__link-characteristics"
  );

  const linksArray = [...links, detailsLink];

  seamless.polyfill();

  linksArray.forEach((link) => {
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
  });
};

smoothScroll();
