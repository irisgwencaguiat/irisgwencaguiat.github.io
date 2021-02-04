<template>
  <section>
    <v-row>
      <v-col md="4">
        <v-card elevation="0">
          <v-card-actions>
            <v-img
              height="250"
              src="https://images.pexels.com/photos/5928039/pexels-photo-5928039.jpeg?cs=srgb&dl=pexels-polina-kovaleva-5928039.jpg&fm=jpg"
              class="d-flex align-center"
            >
              <v-row>
                <v-col
                  offset-md="2"
                  md="8"
                  class="opacity-card grey lighten-3 pa-7 text-center"
                >
                  <h1 class="text">Selfcare</h1>
                  <v-card-subtitle>Skincare and Health</v-card-subtitle>
                </v-col>
              </v-row>
            </v-img>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col md="4">
        <v-card elevation="0">
          <v-card-actions>
            <v-img
              height="250"
              src="https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?cs=srgb&dl=pexels-negative-space-169573.jpg&fm=jpg"
              class="d-flex align-center"
            >
              <v-row>
                <v-col
                  offset-md="2"
                  md="8"
                  class="opacity-card grey lighten-3 pa-7 text-center"
                >
                  <h1 class="text">Tech Stuffs</h1>
                  <v-card-subtitle>Coding and Technology</v-card-subtitle>
                </v-col>
              </v-row>
            </v-img>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col md="4">
        <v-card elevation="0">
          <v-card-actions>
            <v-img
              height="250"
              src="https://images.pexels.com/photos/733852/pexels-photo-733852.jpeg?cs=srgb&dl=pexels-tirachard-kumtanom-733852.jpg&fm=jpg"
              class="d-flex align-center"
            >
              <v-row>
                <v-col
                  offset-md="2"
                  md="8"
                  class="opacity-card grey lighten-3 pa-7 text-center"
                >
                  <h1 class="text">Adulting</h1>
                  <v-card-subtitle>Adulting Stuffs</v-card-subtitle>
                </v-col>
              </v-row>
            </v-img>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-card class="mt-4 mb-16" elevation="0">
      <div class="d-flex justify-center">
        <v-card-title class="home-title pt-8">Home</v-card-title>
      </div>
      <v-row>
        <v-col offset-md="1" md="5">
          <v-card-title class="text">Greetings</v-card-title>
          <v-card-text class="text-justify">
            Welcome to my blog! This is my personal space in the internet where
            I share useful knowledge and experiences about techy stuffs like
            programming, the ways I take care and pamper myself, and things I
            learn while I'm currently in the phase of adulting.
          </v-card-text>
        </v-col>
        <v-col offset-md="" md="5">
          <v-card-actions>
            <v-img
              height="250"
              src="https://images.pexels.com/photos/1172849/pexels-photo-1172849.jpeg?cs=srgb&dl=pexels-jess-bailey-designs-1172849.jpg&fm=jpg"
            >
            </v-img>
          </v-card-actions>
        </v-col>
      </v-row>
    </v-card>
  </section>
</template>

<style scoped>
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
