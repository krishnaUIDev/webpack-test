import Kiwi from "./RestApi.jpg";

function addImage() {
  const img = document.createElement("img");
  img.alt = "certificate";
  img.width = 300;
  img.src = Kiwi;
  const body = document.querySelector("body");
  body.appendChild(img);
}

export default addImage;
