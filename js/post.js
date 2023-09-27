import {apiUrl, apiEmbeded, spinnerDiv, loadingDiv} from "./components/constants.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const apiUrlId = apiUrl + "/" + id + apiEmbeded;

const resultsContainer = document.querySelector(".container");




      async function renderHTML() {
            try {
            
            loadingDiv.innerHTML = spinnerDiv;
            const response = await fetch(apiUrlId);
            const json = await response.json();

            loadingDiv.innerHTML = "";

            resultsContainer.innerHTML = `
                  <img src="${json._embedded["wp:featuredmedia"][0].source_url}" class="headimg">
                  <h1>${json.title.rendered}</h1>
                  <div class="content-rendered">${json.content.rendered}</div>
                  <div class="popup">
                        <img src="${json._embedded["wp:featuredmedia"][0].source_url}" class="headimg">
                  </div>
                  `
                  ;

                  document.title = `Cinebite | ${json.title.rendered}`; 
              
                  document.querySelectorAll(".container img").forEach(image =>{
                        image.onclick = () =>{
                              document.querySelector(".popup").style.display = "block";
                              document.querySelector(".popup img").src = image.getAttribute("src");
                        }
                      });
                  document.querySelector(".container .popup").onclick = () =>{
                        document.querySelector(".popup").style.display = "none";
                  }
            }
          
            catch(error) {
          
            }
          
          
          }
          renderHTML()

