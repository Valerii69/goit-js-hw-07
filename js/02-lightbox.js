import { galleryItems } from './gallery-items.js';
// Change code below this line

function galleryItemCreate(galleryItems) {
    return galleryItems
      .map(({ preview, original, description }) => {
        return `<li class="gallery__item">
              <a class="gallery__link" href="${original}"><img
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
  const items = galleryItemCreate(galleryItems); //створення посилання на строку з зображенням
  console.log(galleryItemCreate(galleryItems)); //перевірка створення div з class="gallery__item"
  
  //додаємо слоти з зображенням до розмітки
  
  const gallery = document.querySelector(".gallery"); // DOM для gallery
  
  gallery.insertAdjacentHTML("beforeend", items); // додаємо до HTML розмітки зображення

  const lightbox = new SimpleLightbox(".gallery a", {

    captionsData: "alt",
    animationSpeed: 250,
    maxZoom: 20
  });


console.log(galleryItems);
