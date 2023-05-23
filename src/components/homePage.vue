<template class="w-full h-screen">
  <div class="bg-[#2c2c38] w-full">
    <div class="w-full h-screen" :style="cssProps">
      <div class="container mx-auto flex flex-row gap-5 pt-10 justify-center items-center">
        <div class="w-full py-36 ml-10 px-5 mb-10 mt-20 flex flex-col gap-3 text-left">
          <p class="text-white text-5xl font-semibold tracking-wide">
            {{ concert.name }}
          </p>
          <p class="text-white tracking-wide mt-3">{{ concert.details }}</p>
          <p class="text-white tracking-wide">Show Date : {{ new Date(concert.dateStart).toDateString() }}</p>
          <p class="text-white tracking-wide mb-4">Location : {{ concert.location }}</p>
          <div class="mb-6">
            <router-link :to="`/detail/${concert.id}`"><a
                class="w-36 mt-3 px-9 border-2 border-orange-500 hover:bg-orange-500/10 text-orange-500 rounded text-sm text-center p-2 tracking-wide">Buy
                Ticket</a></router-link>
          </div>
          <div>
            <router-link to="/allConcert"><a
                class="w-48 mt-3 px-9 border-2 border-white hover:bg-white/20 text-white rounded text-sm text-center p-2 tracking-wide">See
                more concerts -></a></router-link>
          </div>
        </div>
        <div class="w-full my-10 flex justify-center">
          <img class="w-96 h-auto rounded" :src="`http://localhost:3000/${concert.image}`" alt="Image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
import axios from 'axios';
export default {
  name: "homePage",
  components: {
    RouterLink,
  },
  data() {
    return {
      concert: {},
      cssProps: {
        backgroundImage: `url(${require("../assets/wall.png")})`,
        height: "100%",
      },
    };
  },
  mounted() {
    axios.get('http://localhost:3000/getLastConcert')
      .then((res) => {
        this.concert = res.data;
      })
      .catch((err) => {
        console.log(err);
      })
  },
  methods: {},
};
</script>

<style>
/* .card {
  width: 100%;
  height: 100%;
} */
img {
  width: 20%;
  height: 20%;
}
</style>
