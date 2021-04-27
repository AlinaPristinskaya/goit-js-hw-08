import galleryEl from "./gallery-items.js";
const modal = document.querySelector(".lightbox");

const parentEl = document.querySelector(".js-gallery");

const cardGallery = createProducts(galleryEl);
function createProducts(galleryEl) {
  return galleryEl
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
      <a
        class="gallery__link"
        href=""
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
window.addEventListener("click", onModalOpenClick);
function onModalOpenClick(evt) {
  /* const itemImage = evt.target.classList.contains(".gallery__image");
  const itemLink = evt.target.classList.contains("gallery__link");
  const itemLi = evt.target.classList.contains("gallery__item");
  if (itemImage)  */ {
    console.log("onModalOpenClick");
    console.log("onModalOpenClick => evt.target", evt.target);
    console.log("onModalOpenClick=>evt.currentTarget", evt.currentTarget);
  }
}
//modal.classList.add("is-open");
/* if (modalOpen) {
  const imageOpen = document.querySelector("img.lightbox__image");
  console.log(imageOpen);
} */

