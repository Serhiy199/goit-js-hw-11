import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const BASE_URL = 'https://pixabay.com/api/';
const key = 'key=41516646-ec27055f09ddd37d9bfda39a5';
const image = 'image_type=photo';
const orientation = 'orientation=horizontal';
const safesearch = 'safesearch=true';

const containerDestroy = document.querySelectorAll('.gallery.gallery-item');
for (const destroy of containerDestroy) {
    console.log(destroy);
}

const from = document.querySelector('.form');
const listGallery = document.querySelector('.gallery');
const body = document.querySelector('body');

from.addEventListener('submit', event => {
    event.preventDefault();
    handleClickDestroy();
    body.insertAdjacentHTML('beforeend', '<span class="loader"></span>');
    const resultsSearch = event.target.elements.search.value;

    fetch(
        `${BASE_URL}?${key}&q=${resultsSearch}&${image}&${orientation}&${safesearch}`
    )
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        })

        .then(result => {
            const dataFormImage = result.hits;
            if (!dataFormImage.length) {
                iziToast.error({
                    message: `❌ Sorry, there are no images matching your search query. Please, try again!`,
                    icon: '',

                    position: 'topRight',
                });
            }
            const galleryMarkup = dataFormImage.reduce(
                (
                    html,
                    {
                        webformatURL,
                        largeImageURL,
                        tags,
                        likes,
                        views,
                        comments,
                        downloads,
                    }
                ) =>
                    html +
                    `<li class="gallery-item">
            <a class="gallery-link" href="${largeImageURL}">
                <img class="gallery-image" src="${webformatURL}" alt="${tags}"/>
            </a>
            <ul class="characteristics-list">
            <li class="characteristics"><span class="characteristics-titel">Likes</span> <span>${likes}</span></li>
            <li class="characteristics"><span class="characteristics-titel">Views</span> <span>${views}</span></li>
            <li class="characteristics"><span class="characteristics-titel">Comments</span> <span>${comments}</span></li>
            <li class="characteristics"><span class="characteristics-titel">Downloads</span> <span>${downloads}</span></li>
        </ul>
            
        </li>`,
                ''
            );
            listGallery.insertAdjacentHTML('beforeend', galleryMarkup);
            let gallery = new SimpleLightbox('.gallery a', {
                captionsData: 'alt',
                captionDelay: 250,
                captionPosition: 'bottom',
            });

            gallery.refresh();
            const loaderDestroy = document.querySelector('.loader');
            loaderDestroy.remove();
        })
        .catch(error => {
            console.log(error.message);
        });
});

function handleClickDestroy() {
    const containerDestroy = document.querySelectorAll('.gallery-item');
    for (const destroy of containerDestroy) {
        destroy.remove();
    }
}
