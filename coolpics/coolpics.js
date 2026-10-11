const menuButton = document.querySelector(".menu");
const nav = document.querySelector("nav");

menuButton.addEventListener("click", () => {
  nav.classList.toggle("hide");
});

const gallery = document.querySelector(".gallery");
const modal = document.querySelector("dialog");
const modalImage = modal.querySelector("img");
const closeButton = modal.querySelector(".close-viewer");

gallery.addEventListener("click", openModal);

function openModal(event) {
  if (event.target.tagName === "IMG") {
    modalImage.src =
      "https://wddbyui.github.io/wdd131/images/norris-full.jpg";

    modalImage.alt = event.target.alt;

    modal.showModal();
  }
}

closeButton.addEventListener("click", () => {
  modal.close();
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.close();
  }
});