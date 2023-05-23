<template class="w-full min-h-screen">
  <div class="w-full min-h-screen bg-gradient-to-b from-[#2c2c38] via-[#284265] to-[#2c2c38]">
    <div class="container mx-auto py-10 flex flex-col justify-center items-center ">
      <div class="w-full grid lg:grid-cols-2 grid-cols-1 gap-4 px-20 mt-2">
        <div class="w-full flex flex-col items-center">
          <img class="w-80 object-cover rounded-lg mt-8" :src="`http://localhost:3000/${concert.image}`" />
        </div>
        <div class="w-full px-8">
          <div class="flex flex-col gap-4 py-4 mt-4 text-left">
            <div class="text-3xl font-bold text-white tracking-wide">
              {{ concert.name }}
            </div>
            <span class="font-base text-lg text-white text-left">
              Artist: {{ concert.artist }}
            </span>
            <span class="font-base text-lg text-white text-left">
              Date: {{ formatDate(concert.dateStart) }} - {{ formatDate(concert.dateEnd) }}
            </span>
            <span class="font-base text-lg text-white text-left">
              Location: {{ concert.location }}
            </span>
            <span class="font-base text-lg text-white text-left">
              {{ concert.details }}
            </span>
          </div>
        </div>
        <div class="relative inline-block text-left mt-3">
          <div>
            <button @click="isOpen = !isOpen" type="button"
              class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-6 py-4 bg-red-500 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              id="rounds-menu" aria-haspopup="true" aria-expanded="true">
              <p v-if="selectedRound">
                {{ new Date(selectedRound.date).toDateString() }} ( {{ new
                  Date(selectedRound.startTime).toTimeString().slice(0, 5) }} - {{ new
    Date(selectedRound.endTime).toTimeString().slice(0, 5) }})
              </p>
              <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                aria-hidden="true">
                <path fill-rule="evenodd"
                  d="M6.293 6.293a1 1 0 0 1 1.414 0L10 8.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z"
                  clip-rule="evenodd" />
              </svg>
            </button>
          </div>

          <div v-show="isOpen"
            class="right-0 mt-2 w-full rounded-md shadow-lg bg-red-500 ring-1 ring-black ring-opacity-5 " role="menu"
            aria-orientation="vertical" aria-labelledby="rounds-menu">
            <div class="py-1" role="none">
              <a v-for="(round, index) in rounds" :key="round.id" @click="selectRound(round, index+1)"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                Round {{ index + 1 }} - {{ new Date(round.date).toDateString() }} ( {{ new
                  Date(round.startTime).toTimeString().slice(0, 5) }} - {{ new Date(round.endTime).toTimeString().slice(0,
    5) }})
              </a>
            </div>
          </div>
        </div>
        <div v-show="checkValueRound" class="flex justify-end items-center mt-3">
          <a @click="sentSelectZone"
            class="w-48 rounded-md border border-gray-300 shadow-sm px-6 py-3 bg-[#FE862D] font-bold text-white hover:bg-[#e16f1a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Select
            Zone
            -></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import moment from 'moment';

export default {
  data() {
    return {
      concert: {},
      isOpen: false,
      selectedRound: "",
      rounds: [],
      checkValueRound: false
    };
  },
  beforeCreate() {
    const id = this.$route.params.concertId
    axios
      .get("http://localhost:3000/getConcertById/" + id)
      .then((res) => {
        this.concert = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
    axios.get("http://localhost:3000/getRoundByConcertId/" + id)
      .then((res) => {
        this.rounds = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },

  methods: {
    formatDate(dateString) {
      const date = moment(dateString);
      return date.format('DD-MM-YYYY');
    },
    selectRound(round, index) {
      round.index = index;
      this.selectedRound = round;
      this.isOpen = false;
      this.checkValueRound = true
    },
    // opacityStyle() {
    //   if (this.selectedRound.value === null) {
    //     return { opacity: 0 }
    //   }
    //   else {
    //     return { opacity: 100 }
    //   }
    // },
    sentSelectZone() {
      this.$router.push({ name: 'zoneArea', params: { concertId: this.$route.params.concertId, roundId: this.selectedRound.id } })
    }
  },
};
</script>
<style>
/* .selectZoneBtn {
  width: 20%;
  margin-left: 85%;
} */
</style>
