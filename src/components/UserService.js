import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getList: async function (page) {
    try {
      let url;
      if ((page != null) & (page > 0)) {
        url = "http://localhost:2020/api/post/get?size=5&page=" + page;
      } else {
        url = "http://localhost:2020/api/post/get?size=5";
      }
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};
