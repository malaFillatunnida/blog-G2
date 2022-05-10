import axios from "axios";

export default {
  getList: async function (page) {
    try {
      let url;
      if ((page != null) & (page > 1)) {
        url = "http://localhost:2020/api/post/get?size=3&page=" + page;
      } else {
        url = "http://localhost:2020/api/post/get?size=3";
      }
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};
