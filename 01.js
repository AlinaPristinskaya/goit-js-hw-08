import galleryEl from "./gallery-items.js";
const modal = document.querySelector(".lightbox");

const parentEl = document.querySelector(".js-gallery");
const originalImg = document.querySelector(".lightbox__image");

const cardGallery = createProducts(galleryEl);
function createProducts(galleryEl) {
  return galleryEl
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
      <a
        class="gallery__link"
        href="${original}"
      > 
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
       </a> 
    </li>`;
    })
    .join("");
}
parentEl.insertAdjacentHTML("beforeend", cardGallery);

parentEl.addEventListener("click", onModalOpenClick);
function onModalOpenClick(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== "IMG") {
    return;
  }

  modal.classList.add("is-open");

  originalImg.src = evt.target.dataset.source;
  originalImg.alt = evt.target.alt;
}
//const buttonCloseModal = document.querySelector(".lightbox__button");
window.addEventListener("click", onClose);
function onClose(evt) {
  console.log(evt.target.classList);
  if (
    evt.target.nodeName === "BUTTON" ||
    evt.target.classList.contains("lightbox__overlay")
  ) {
    originalImg.src = "";
    modal.classList.remove("is-open");
  }
  return;
}
