// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

addGalleryImage(galleryItems);

function addGalleryImage(images) {
  return images.map(evt => {
    galleryEl.insertAdjacentHTML(
      'beforeend',
      `
    <a class="gallery__item" href="${evt.original}">
      <img class="gallery__image" src="${evt.preview}" title="${evt.description}" alt="${evt.description}" />
    </a>
    `
    );
  });
}

new SimpleLightbox('.gallery a', {
  captionDelay: 250,
});
