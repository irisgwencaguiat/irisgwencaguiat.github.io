import { GET_AUTHOR, SET_AUTHOR } from "@/store/types/about";
import sanity from "@/sanity";

const clientQuery = `*[_type == "author"] {
    name,
    "authorImage": image.asset->url,
    bio
}`;

const about = {
  state: {
    author: [],
  },

  actions: {
    async [GET_AUTHOR]({ commit }) {
      try {
        const query = await sanity.fetch(clientQuery);
        commit(SET_AUTHOR, query);
      } catch (error) {
        return error;
      }
    },
  },

  mutations: {
    [SET_AUTHOR](state, query) {
      state.author = query;
    },
  },
};

export default about;
