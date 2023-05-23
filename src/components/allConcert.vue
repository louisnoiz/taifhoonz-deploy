<template class="w-full h-screen">
  <div id="wrapper" class="w-full h-screen bg-gradient-to-b from-[#2c2c38] via-[#284265] to-[#2c2c38]">
    <div class="container mx-auto flex flex-col justify-center items-center">
      <div class="w-full flex justify-left pt-10">
        <a href="" class="w-48 text-white text-xl hover:text-indigo-500 font-semibold underline underline-offset-8">Now
          Showing</a>
        <a href="" class="w-48 text-white text-xl hover:text-indigo-500 font-semibold underline underline-offset-8">Coming
          soon</a>
      </div>
      <div class="w-full grid lg:grid-cols-4 md:grid-cols-2 grid-rows gap-8 my-10">
        <div className="w-full grid mb-5 rounded-md shadow-md hover:bg-gray-700/10" id="app"
          v-for="(item, index) in this.namelist" :key="index">
          <a href="" class="">
            <router-link :to="`/detail/${item.id}`">
              <div class="w-full py-5 flex flex-col gap-4 text-white justify-center items-center">
                 <!-- add path photo -->
                <img class="w-72 h-96 rounded" :src="`http://localhost:3000/${item.image}`" alt="Image" />
                <p class="flex flex-col gap-3">
                  <span class="font-bold text-left tracking-wide">
                    {{ item.name }}
                  </span>
                  <span class="font-base text-sm text-left tracking-wide flex items-center gap-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-calendar-week" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" id="mainIconPathAttribute" fill="#b3b3b3"></path> <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" id="mainIconPathAttribute" fill="#fff"></path> </svg> {{ formatDate(item.dateStart) }} - {{ formatDate(item.dateEnd) }}
                  </span>
                  <span class="font-base text-sm text-left tracking-wide flex items-center gap-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" id="IconChangeColor" height="22" width="22"><path d="M15.75 8l-3.74-3.75a3.99 3.99 0 0 1 6.82-3.08A4 4 0 0 1 15.75 8zM1.85 15.3l9.2-9.19 2.83 2.83-9.2 9.2-2.82-2.84zm-1.4 2.83l2.11-2.12 1.42 1.42-2.12 2.12-1.42-1.42zM10 15l2-2v7h-2v-5z" id="mainIconPathAttribute" fill="#ffffff"></path></svg> {{ item.artist }}
                  </span>
                  <span class="font-base text-sm text-left tracking-wide flex items-center gap-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" id="IconChangeColor" height="22" width="22"><!--! Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z" id="mainIconPathAttribute" fill="#ffffff"></path></svg> {{ item.location }}
                  </span>
                </p>
              </div>
            </router-link>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
// import { RouterLink } from "vue-router";
import axios from 'axios';
import moment from 'moment';

export default {
  name: "allConcert",
  // components: {
  //   // HelloWorld
  //   RouterLink,
  // },
  data() {
    return {
      img_concert: {
        backgroundImage: `url(${require("../assets/img_concert.jpg")})`,
      },
      namelist: [],
    };
  },
  beforeCreate() {
    axios
      .get('http://localhost:3000/getAllConcert')
      .then((res) => {
        this.namelist = res.data;
      })
  },
  methods: {
    formatDate(dateString) {
      const date = moment(dateString);
      return date.format('DD-MM-YYYY');
    }
  },
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
  