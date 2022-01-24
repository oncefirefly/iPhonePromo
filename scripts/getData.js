const getData = () => {
  const list = document.querySelector(".cross-sell__list");
  const showMoreBtn = document.querySelector(".cross-sell__add");

  let stack = 4;
  let count = 1;

  const renderData = (data) => {
    list.innerHTML = "";

    data.forEach((item) => {
      list.insertAdjacentHTML(
        "beforeend",
        `
          <li>
            <article class="cross-sell__item">
            <img class="cross-sell__image" src="./${item.photo}" alt="${item.id}">
            <h3 class="cross-sell__title">${item.name}</h3>
            <p class="cross-sell__price">${item.price}₽</p>
            <button type="button" class="button button_buy cross-sell__button">Купить</button>
            </article>
          </li>
        `
      );
    });
  };

  const sliceData = (data, index) => {
    return data.slice(0, index);
  };

  const changeData = (data) => {
    let newStack = stack * count;

    renderData(sliceData(data, newStack));

    if (data.length > newStack) {
      count++;
    } else {
      showMoreBtn.style.display = "none";
    }
  };

  const fetchData = () => {
    fetch("/cross-sell-dbase/dbase.json")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error getting data");
        }
      })
      .then((data) => {
        changeData(data);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  showMoreBtn.addEventListener("click", fetchData);

  fetchData();
};

getData();
