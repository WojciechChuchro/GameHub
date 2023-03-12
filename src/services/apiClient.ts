import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "cd10ba7d8ad54eb0af2b3bcb8151d992",
  },
});
