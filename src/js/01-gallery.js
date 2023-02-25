// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const container = document.querySelector('.gallery');
const arrayOfGallaryElements = createElementsOfGallery(galleryItems);

function createElementsOfGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" title="${description}"/>
</a>
</div>`;
    })
    .join('');
}
container.insertAdjacentHTML('beforeend', arrayOfGallaryElements);
let gallery = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
  });
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
