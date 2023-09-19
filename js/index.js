const apiUrl = "https://a33.no/wp-json/wp/v2/posts/70";

const resultsContainer = document.querySelector(".container");



const response = await fetch(apiUrl);
      const json = await response.json();

      resultsContainer.innerHTML = `<div>${json.content.rendered}</div>`
      