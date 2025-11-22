const input = document.querySelector("#text-input");
const button = document.querySelector("#change-btn");

button.textContent = input.value; 


button.addEventListener("click", () => {
  button.textContent = input.value;
});

const img = document.querySelector('#my-image');

img.src = 'https://picsum.photos/400/300';


const link = document.querySelector("#my-link");
const image = document.querySelector("#link-image");

link.href = "https://google.com";
image.alt = "Нове описання зображення";

const firstItem = document.querySelector("#my-list li");

firstItem.textContent = "Новий текст для першого елемента";
