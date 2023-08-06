const axios = require("axios");

const wikipediaAPI = axios.create({
  baseURL: "https://en.wikipedia.org/w/api.php",
  params: {
    format: "json",
  },
});


async function searchWikipedia(query) {
  try {
    const response = await wikipediaAPI.get("", {
      params: {
        action: "query",
        list: "search",
        srsearch: query,
      },
    });
    return response.data.query.search;
  } catch (error) {
    throw new Error("Error searching Wikipedia API");
  }
}

module.exports = {
  searchWikipedia,
};
