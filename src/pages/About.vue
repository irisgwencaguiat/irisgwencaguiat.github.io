<template>
  <section>
    <v-row no-gutters>
      <v-col offset-md="1" md="10">
        <v-card class="mt-8" color="grey lighten-5">
          <v-row>
            <v-col offset-md="1" md="5">
              <v-img
                height="85vh"
                contain
                :src="urlFor(getAuthor.authorImage).url()"
              ></v-img>
            </v-col>
            <v-col md="5" class="d-flex">
              <div class="align-self-center">
                <h1 class="banner text-center">About Me</h1>
                <v-card-text class="about-text text-justify">
                  {{ getAuthor.bio }}
                </v-card-text>
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </section>
</template>

<script>
import sanity from "@/sanity";
import imageUrlBuilder from "@sanity/image-url";
const builder = imageUrlBuilder(sanity);

export default {
  methods: {
    urlFor(source) {
      return builder.image(source);
    },
    test() {
      console.log(this.$store.state.about.author[0].authorImage);
    },
  },
  computed: {
    getAuthor() {
      return this.$store.state.about.author[0];
    },
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Bodoni+Moda&display=swap");

.about-text {
  font-size: 1rem;
  font-family: "Bodoni Moda", serif;
}

.banner {
  font-size: 3rem;
  font-family: "Raleway", sans-serif;
}
</style>
