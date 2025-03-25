// SimpleLightbox
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const list = document.querySelector(`.gallery`);

const gallery = new SimpleLightbox('.gallery-link', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function renderGallery(images) {
  const markup = images
    .map(
      ({
        largeImageURL,
        webformatURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
    <li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
          <img src="${webformatURL}" alt="${tags}" width="360" height="200" />
        </a>
        <div class="description-container">
        <div class="description">
          <p class="description-text">Likes</p>
          <span class="description-num">${likes}</span>
        </div>
        <div class="description">
          <p class="description-text">Views</p>
          <span class="description-num">${views}</span>
        </div>
        <div class="description">
          <p class="description-text">Comments</p>
          <span class="description-num">${comments}</span>
        </div>
        <div class="description">
          <p class="description-text">Downloads</p>
          <span class="description-num">${downloads}</span>
        </div>
        </div>
      </li>`
    )
    .join(``);
  list.insertAdjacentHTML(`beforeend`, markup);
  gallery.refresh();
}

export function cleanGallery() {
  list.innerHTML = ``;
}
