import { galleryItems } from "./gallery-items.js";
// Change code below this line

//створюємо слоти із зображенням з масива у строку
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
gallery.addEventListener("click", onClick); // додаємо до спостерігача click до  зображення

function onClick(evt) {
  evt.preventDefault(); // прибираємо дію за замовчуванням дію браузера за подією

  const imgClick = evt.target.classList.contains("gallery__image"); //перевірка наявності вказанного CSS-класса у списку класів елемента, якщо ні - закінчити виконання
  if (!imgClick) {
    return;
  }
  // додаємо плагіна basicLightbox до розмітки
  const banner = basicLightbox.create(`<img src="${evt.target.dataset.source}" width="600">`,{
    BanerOn() {
        document.on("keyup", esc); // додаємо спостерігача на відкриття
      },
      
      BanerOff() {
        document.off("keyup", esc); // додаємо спостерігача на відкриття
      },
    });
//закриваємо банер з екрана
  const esc = (event) => {
    if (event.key === "Escape") {
      banner.close();
    }
  };

  banner.show();
}

console.log(galleryItems);
