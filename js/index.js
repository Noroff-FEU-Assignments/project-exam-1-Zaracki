const apiUrl = "https://a33.no/wp-json/wp/v2/posts?_embed";

const heroImg = document.querySelector(".img-overlay")
const carousel = document.querySelector(".carousel");
const arrowIcons = document.querySelectorAll(".wrapper i");






async function renderHTML() {
  try {
    const response = await fetch(apiUrl);
    const json = await response.json();

    const posts = json.results;

    for (let i = 0; i <= 0; i++) {
      let currentJson = json[i];

      heroImg.innerHTML += `
      <a href="post.html?id=${currentJson.id}"><img src="${currentJson._embedded["wp:featuredmedia"][0].source_url}" alt=""></a>
      <div class="lowerleft">
        <p class="new-post">New</p>
        <p>${currentJson.title.rendered}</p> 
      </div>
      <div class="upperright">
      <p>wall.alphacoders.com</p>
    </div>
      `
    }

    for (let i = 1; i <= 9; i++) {
      let currentJson = json[i];

      carousel.innerHTML += `
      <div class="carousel-img">
      <a href="post.html?id=${currentJson.id}"><img src="${currentJson._embedded["wp:featuredmedia"][0].source_url}"></a>
      <div class="lowerleft-carousel">
        <p>${currentJson.title.rendered}</p>
      </div>
      <div class="upperright-carousel">
        <p>wall.alphacoders.com</p>
      </div>`
    }

    const firstImg = carousel.querySelectorAll(".carousel-img")[0];
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
    
  }

  catch(error) {

  }


}
renderHTML()



//carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;

