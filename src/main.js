import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import iconError from './img/cross.png';
import { getImages } from './js/pixabay-api';
import { renderGallery, cleanGallery } from './js/render-functions';

let userAnswer = '';
let page = 1;
const per_page = 15;
let totalHits = 0;

const iziToastNoMatches = {
  message:
    'Sorry, there are no images matching your search query. Please try again',
  iconUrl: iconError,
  position: 'topRight',
  messageColor: '#fff',
  backgroundColor: '#ef4040',
  theme: 'dark',
  maxWidth: '432px',
};

const iziToastEndResults = {
  message: "We're sorry, but you've reached the end of search results.",
  position: 'topRight',
  messageColor: '#FAFAFB',
  backgroundColor: '#00CED1',
  theme: 'dark',
  maxWidth: '432px',
};

const form = document.querySelector('.form');
const loader = document.querySelector('.loader');
const paginationButton = document.querySelector('.pagination-btn');

form.addEventListener('submit', formSubmit);
paginationButton.addEventListener('click', handlePagination);

async function formSubmit(event) {
  event.preventDefault();
  userAnswer = event.currentTarget.elements.searchText.value.trim();

  if (!userAnswer) {
    iziToast.error({
      message: 'Please, enter search word',
      position: 'topRight',
    });
    return;
  }

  page = 1;
  cleanGallery();
  hidePaginationButton();
  showLoader();

  try {
    const { hits, totalHits: total } = await getImages(
      userAnswer,
      page,
      per_page
    );
    totalHits = total;

    if (!hits.length) {
      iziToast.show(iziToastNoMatches);
      return;
    }

    renderGallery(hits);
    checkPaginationAvailability();
  } catch {
    iziToast.error({
      message: 'An error occurred while fetching images.',
      position: 'topRight',
    });
  } finally {
    form.reset();
    hideLoader();
  }
}

async function handlePagination() {
  page++;
  hidePaginationButton();
  showLoader();

  try {
    const { hits } = await getImages(userAnswer, page, per_page);
    renderGallery(hits);

    window.scrollBy({
      top:
        document.querySelector('.gallery-item').getBoundingClientRect().height *
        2,
      behavior: 'smooth',
    });

    checkPaginationAvailability();
  } catch {
    iziToast.error({
      message: 'An error occurred while fetching images.',
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
}

function checkPaginationAvailability() {
  const loadedImages = page * per_page;

  // Ограничиваем количество загружаемых изображений
  const maxImagesLimit = 45;

  if (loadedImages >= totalHits || loadedImages >= maxImagesLimit) {
    iziToast.info(iziToastEndResults);
    hidePaginationButton();
  } else {
    showPaginationButton();
  }
}

function showLoader() {
  loader.style.display = 'flex';
}
function hideLoader() {
  loader.style.display = 'none';
}

function showPaginationButton() {
  paginationButton.style.display = 'block';
}
function hidePaginationButton() {
  paginationButton.style.display = 'none';
}
