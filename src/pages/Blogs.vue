<template>
  <section>
    <v-row>
      <v-col md="6" v-for="query in getBlogs">
        <blog :query="query"></blog>
      </v-col>
    </v-row>
  </section>
</template>

<script>
import Blog from "@/components/Blog";
import { GET_BLOG } from "@/store/types/blog";

export default {
  created() {
    this.$store.dispatch(GET_BLOG);
  },
  components: { Blog },
  computed: {
    getBlogs() {
      return this.$store.state.blog.blogs;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Bodoni+Moda&display=swap");

.home-title {
  font-weight: bold;
  font-size: 3rem;
  font-family: "Bodoni Moda", serif;
}

.text {
  font-weight: bold;
  font-size: 2rem;
  font-family: "Bodoni Moda", serif;
}
.opacity-card {
  opacity: 0.8;
}
</style>
