<template>
  <section>
    <v-card class="mt-2 mb-2" elevation="0">
      <v-row>
        <v-col offset-md="1" md="10">
          <v-card-actions>
            <v-img height="80vh" :src="urlFor(getBlog[0].imageUrl).url()">
            </v-img>
          </v-card-actions>
          <v-card-actions
            v-for="category in getBlog[0].categories"
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
          <v-card-title class="text">{{ getBlog[0].title }}</v-card-title>
          <v-spacer></v-spacer>
          <v-card-text
            v-for="body in getBlog[0].body"
            style="line-height: 20px"
            class="text-justify"
          >
            <span>{{ body.children[0].text }}</span>
          </v-card-text>
          <v-card-subtitle class="d-flex">
            <span>{{ getBlog[0]._createdAt }}</span>
            <v-spacer></v-spacer>
            <span>{{ getBlog[0].author.name }}</span>
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
  methods: {
    urlFor(source) {
      return builder.image(source);
    },
  },
  computed: {
    getBlog() {
      const blogs = this.$store.state.blog.blogs;
      return blogs.filter((blog) => {
        return blog._id === this.$route.params.id;
      });
    },
  },
};
</script>
