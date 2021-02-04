<template>
  <section>
    <v-card class="mt-2 mb-2" elevation="0">
      <v-row>
        <v-col offset-md="1" md="10">
          <v-card-actions>
            <v-img height="40vh" :src="urlFor(query.imageUrl).url()"> </v-img>
          </v-card-actions>
          <v-card-actions
            v-for="category in query.categories"
            class="d-inline-flex"
          >
            <v-btn
              rounded
              outlined
              style="background-color: #787878"
              small
              dark
            >
              {{ category.title }}
            </v-btn>
          </v-card-actions>
          <v-card-title class="text">{{ minimizeTitle }}</v-card-title>
          <v-card-text style="line-height: 20px" class="text-justify">
            {{ joinBodyText }}
          </v-card-text>
          <v-card-actions class="d-flex justify-center">
            <v-btn
              class="ma-2"
              outlined
              color="grey darken-3"
              @click="goToBlog"
            >
              Read More
            </v-btn>
          </v-card-actions>
          <v-card-subtitle class="d-flex">
            <span>2021-01-18T04:20:52Z</span>
            <v-spacer></v-spacer>
            <span>by {{ query.author.name }}</span>
          </v-card-subtitle>
        </v-col>
      </v-row>
    </v-card>
  </section>
</template>

<script>
import sanity from "@/sanity";
import imageUrlBuilder from "@sanity/image-url";
const builder = imageUrlBuilder(sanity);

export default {
  props: ["query"],
  methods: {
    goToBlog() {
      this.$router.push({ name: "Blog", params: { id: this.query._id } });
    },
    urlFor(source) {
      return builder.image(source);
    },
  },
  computed: {
    joinBodyText() {
      let bodyArray = [];

      this.query.body.forEach((body) => {
        let stringifyText = JSON.stringify(body.children[0].text);
        bodyArray.push(stringifyText);
      });

      const text = bodyArray.join("");
      if (text.length < 250) {
        return text;
      }

      return `${text.split("").slice(0, 250).join("")}...`;
    },
    minimizeTitle() {
      if (this.query.title.length < 50) {
        return this.query.title;
      }
      return `${this.query.title.split("").slice(0, 50).join("")}...`;
    },
  },
};
</script>
