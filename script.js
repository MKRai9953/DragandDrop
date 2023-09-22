const dropArea = document.getElementById("drop-area");
const inputFile = document.getElementById("inputFile");
const imageView = document.getElementById("image-view");
// let img = document.getElementById("image");

inputFile.addEventListener("change", () => {
  uploadImage();
});

let uploadImage = () => {
  let imgLink = URL.createObjectURL(inputFile.files[0]);
  imageView.style.backgroundImage = `url(${imgLink})`;
  imageView.style.backgroundRepeat = "no-Repeat";
  imageView.textContent = "";
  imageView.style.border = 0;
};

dropArea.addEventListener("dragover", (e) => {
  e.preventDefault();
});
dropArea.addEventListener("drop", (e) => {
  e.preventDefault();
  inputFile.files = e.dataTransfer.files;
  uploadImage();
});
