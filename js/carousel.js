const carousel = document.querySelector(".carousel");
const firstImg = carousel.querySelectorAll(".carousel-img")[0];
const arrowIcons = document.querySelectorAll(".wrapper i");

let firstImgWidth = firstImg.clientWidth + 20;

arrowIcons.forEach(icon => {
  icon.addEventListener("click", () => {
    if(icon.id == "left") {
      carousel.scrollLeft -= firstImgWidth;
    } else {
      carousel.scrollLeft += firstImgWidth;
    }
  })
})

//carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;

