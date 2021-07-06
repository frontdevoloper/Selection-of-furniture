const buttonsCall = document.querySelectorAll(".btnCall");

if (buttonsCall) {
  buttonsCall.forEach((button) => {
    button.addEventListener("click", () => {
      const popupItems = document.querySelectorAll(".popup");
      popupItems.forEach((popupItem) => {
        popupItem.classList.toggle("_active");
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
    });
  }
}
