const buttonsCall = document.querySelectorAll(".btnCall");

if (buttonsCall) {
  buttonsCall.forEach((button) => {
    button.addEventListener("click", () => {
      //const popupItems = document.querySelectorAll(".popup");
      const popupItem = document.querySelector(button.dataset.goto);
      popupItem.classList.add("_active");
      document.body.classList.add("_block");
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
  const inputsPhone = document.querySelectorAll(".input-tel");
  const maskOptions = {
    mask: "+{7} (000) 000-00-00",
  };
  // запускаем плагин с переданными параметрами
  for (let index = 0; index < inputsPhone.length; index++) {
    const input = inputsPhone[index];
    IMask(input, maskOptions);
  }
});
