import {apiUrl, apiEmbeded} from "./components/constants.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const apiUrlId = apiUrl + id + apiEmbeded;

const resultsContainer = document.querySelector(".container");


const response = await fetch(apiUrlId);
      const json = await response.json();

      resultsContainer.innerHTML = `<img src="${json._embedded["wp:featuredmedia"][0].source_url}" class="headimg">
      <h1>${json.title.rendered}</h1>
      <div class="content-rendered">${json.content.rendered}</div>`
      ;

      document.title = `Cinebite | ${json.title.rendered}`; 


