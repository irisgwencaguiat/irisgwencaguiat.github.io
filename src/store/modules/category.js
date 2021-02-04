import { GET_CATEGORY, SET_CATEGORY } from "@/store/types/category";
import sanity from "@/sanity";

const clientQuery = `*[_type == "category"]`;

const category = {
  state: {
    categories: [],
  },

  actions: {
    async [GET_CATEGORY]({ commit }) {
      try {
        const query = await sanity.fetch(clientQuery);
        commit(SET_CATEGORY, query);
      } catch (error) {
        return error;
      }
    },
  },

  mutations: {
    [SET_CATEGORY](state, query) {
      state.categories = query;
    },
  },
};

export default category;
