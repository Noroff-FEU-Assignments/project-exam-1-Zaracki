const apiUrl = "https://a33.no/wp-json/wp/v2/posts/88?_embed";

const resultsContainer = document.querySelector(".container");

const response = await fetch(apiUrl);
      const json = await response.json();

      resultsContainer.innerHTML = `<img src="${json._embedded["wp:featuredmedia"][0].source_url}">
      <h1>${json.title.rendered}</h1>
      <div class="content-rendered">${json.content.rendered}</div>`
      ;