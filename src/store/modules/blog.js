import { GET_BLOG, SET_BLOGS } from "@/store/types/blog";
import sanity from "@/sanity";
const clientQuery = `*[_type == "post"] {
  _id,
  _createdAt,
  title,
  author->{name},
  body[]{children[]{text}},
  "categories": categories[]->{title},
  "imageUrl": mainImage.asset->url,
  "imageCrop:": mainImage.crop,
  "imageHotspot": mainImage.hotspot
}
`;

const blog = {
  state: {
    blogs: [],
  },

  actions: {
    async [GET_BLOG]({ commit }) {
      try {
        const query = await sanity.fetch(clientQuery);
        commit(SET_BLOGS, query);
      } catch (error) {
        return error;
      }
    },
  },

  mutations: {
    [SET_BLOGS](state, query) {
      state.blogs = query;
    },
  },
};

export default blog;
