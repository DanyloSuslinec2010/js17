const input = document.getElementById("textInput");
const button = document.getElementById("changeBtn");

button.addEventListener("click", () => {
  if (input.value.trim() !== "") {
    button.textContent = input.value;
  }
});




const image = document.getElementById("myImage");
image.src =
  "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&w=400";



const link = document.getElementById("myLink");
const linkImg = document.getElementById("linkImage");

link.href = "https://openai.com";
linkImg.alt = "Гарне зображення коней";









const list = document.getElementById("myList");
const firstItem = list.querySelector("li");
firstItem.textContent = "Новий текст для першого елемента";























