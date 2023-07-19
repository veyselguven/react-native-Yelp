import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer o0JdS96H4qdO8lIqRnqKk0vNY6eDceOU23AU2mUTOAcC5H9WnXnKOXZzT8l1M4iB7El79JprfP5VvOVbSP8HLFiVTDzWW1jENzi7LI1Hn8JzMCulQr5quAgCbea1ZHYx",
  },
});
