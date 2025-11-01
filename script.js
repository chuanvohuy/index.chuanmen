window.addEventListener("load", addTabFocus);
const images = document.querySelectorAll("#image-gallery img");
const previewPic = document.getElementById("image");

for (let i = 0; i < images.length; i++) {
  images[i].setAttribute("tabindex", "0");
  images[i].addEventListener("mouseover", updateImage);
  images[i].addEventListener("mouseleave", resetImage);
  images[i].addEventListener("focus", updateImage);
  images[i].addEventListener("blur", resetImage);
}

function updateImage(event) {
  const newSrc = event.target.src;
  const newAlt = event.target.alt;
  previewPic.src = newSrc;
  previewPic.alt = newAlt;
  console.log("updateImage event fired for:", newAlt);
}

function resetImage() {
  previewPic.src = "images/ảnh 1.webp";
  previewPic.alt = "Main preview image";
  console.log("resetImage event fired");
}

function addTabFocus() {
  console.log("Page loaded: addTabFocus function running");
  for (let i = 0; i < images.length; i++) {
    images[i].setAttribute("tabindex", i + 1);
  }
}
