import Vue from "vue";
import Vuex from "vuex";
import blog from "@/store/modules/blog";
import about from "@/store/modules/about";
import category from "@/store/modules/category";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    blog,
    about,
    category,
  },
});
