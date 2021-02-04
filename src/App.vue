<template>
  <v-app>
    <section class="grey lighten-5 d-flex justify-center">
      <p class="banner">Hello, I'm Iris Gwen</p>
    </section>
    <div style="position: sticky; top: 0; z-index: 1">
      <v-card elevation="0">
        <v-toolbar class="grey lighten-5" flat height="45">
          <v-toolbar-title><h1 class="logo">IG</h1></v-toolbar-title>

          <v-spacer></v-spacer>
          <v-btn text @click="goToHome">Home</v-btn>
          <div class="text-center">
            <v-btn @click="goToBlogs" text> Blogs </v-btn>
          </div>
          <v-btn text @click="goToAbout">About Me</v-btn>

          <v-spacer></v-spacer>

          <v-btn icon @click="goToFacebook"
            ><v-icon>mdi-facebook</v-icon></v-btn
          >
          <v-btn icon @click="goToInstagram"
            ><v-icon>mdi-instagram</v-icon></v-btn
          >
          <v-btn icon @click="goToGithub"><v-icon>mdi-github</v-icon></v-btn>
        </v-toolbar>
      </v-card>
      <v-divider></v-divider>
    </div>
    <v-main class="pb-4 grey lighten-3" style="z-index: 0">
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
    <v-footer padless height="20px" class="grey lighten-5">
      <v-col class="text-center grey lighten-5" cols="12" height="20px">
        {{ new Date().getFullYear() }} <strong>Iris Gwen Caguiat ©</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import { GET_AUTHOR } from "@/store/types/about";
import { GET_CATEGORY } from "@/store/types/category";

export default {
  created() {
    this.$store.dispatch(GET_AUTHOR);
    this.$store.dispatch(GET_CATEGORY);
  },
  computed: {
    getCategories() {
      return this.$store.state.category.categories;
    },
  },
  methods: {
    goToHome() {
      this.$router.push({ name: "Home" });
    },
    goToBlogs() {
      this.$router.push({ name: "Blogs" });
    },
    goToAbout() {
      this.$router.push({ name: "About" });
    },
    goToFacebook() {
      window.open("https://www.facebook.com/riscaguiat");
    },
    goToInstagram() {
      window.open("https://www.instagram.com/riscaguiat/");
    },
    goToGithub() {
      window.open("https://github.com/risuu707");
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Great+Vibes&family=Raleway&display=swap");
.logo {
  font-size: 2rem;
  font-family: "Great Vibes", cursive;
}

.banner {
  font-size: 5rem;
  font-family: "Raleway", sans-serif;
}
</style>
