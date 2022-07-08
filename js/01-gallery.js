import { galleryItems } from './gallery-items.js';

const galleryItem = document.querySelector('.gallery');

const galleryConstruct = () => {
  const imgItem = galleryItems.map((el) => 
    `<div class="gallery__item">
  <a class="gallery__link" href="${el.original}">
    <img
      class="gallery__image"
      src="${el.preview}"
      data-source="${el.original}"
      alt="${el.description}"
    />
  </a>
</div >` 
  )
    .join('');
  galleryItem.innerHTML = imgItem;
}
galleryConstruct();


const selectImg = (event) => {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
  `<img src="${event.target.dataset.source}"/>`);
  instance.show()
  

  const onEscBtnClosing = (event) => {

    console.dir(event.target.nodeName);

    if (event.code === "Escape") {
      instance.close();
      galleryItem.removeEventListener('keydown', onEscBtnClosing);
    }
  }
  
  galleryItem.addEventListener('keydown', onEscBtnClosing);
}

galleryItem.addEventListener('click', selectImg);
