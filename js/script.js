const buttonsCall = document.querySelectorAll(".btnCall");

if (buttonsCall) {
  buttonsCall.forEach((button) => {
    button.addEventListener("click", () => {
      const popupItems = document.querySelectorAll(".popup");
      popupItems.forEach((popupItem) => {
        popupItem.classList.toggle("_active");
        document.body.classList.toggle("_block");
      });
    });
  });
}

const buttonsClose = document.querySelectorAll(".close");

let clickWindow = false;

if (buttonsClose) {
  for (let index = 0; index < buttonsClose.length; index++) {
    const button = buttonsClose[index];
    button.addEventListener("click", () => {
      button.closest(".popup").classList.remove("_active");
      document.body.classList.remove("_block");
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const inputElement = document.getElementById("input-tel"); // ищем наш единственный input
  const maskOptions = {
    mask: "+{7}(000)000-00-00", // задаем единственный параметр mask
  };
  IMask(inputElement, maskOptions); // запускаем плагин с переданными параметрами
});
