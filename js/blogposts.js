const apiUrl = "https://a33.no/wp-json/wp/v2/posts?_embed&per_page=100";
const boxContainer = document.querySelector(".box-container");

async function renderHTML() {
  try {
    const response = await fetch(apiUrl);
    const json = await response.json();

    const posts = json.results;


    for (let i = 0; i <= 20; i++) {
      let currentJson = json[i];

      boxContainer.innerHTML += `
        <div class="box-img">
          <a href="post.html?id=${currentJson.id}"><img src="${currentJson._embedded["wp:featuredmedia"][0].source_url}" alt=" image of ${currentJson.title.rendered}"></a>
          <div class="lowerleft-carousel">
            <p>${currentJson.title.rendered}</p>
          </div>
          <div class="upperright-carousel">
            <p>wall.alphacoders.com</p>
          </div>
        </div>`
    }

    
  }

  catch(error) {

  }


}
renderHTML()



const seeMoreBtn = document.querySelector("#see-more")
let currentItem = 6;

seeMoreBtn.onclick = () => {
  let boxes = [...document.querySelectorAll(".posts-container .box-container .box-img")];
  for (var i = currentItem; i < currentItem + 3; i++){
    boxes[i].style.display = "inline-block";
  }
  currentItem += 3;

  if(currentItem >= boxes.length){
    seeMoreBtn.style.display = "none";
  }

}