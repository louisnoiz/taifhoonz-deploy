<template class="w-full min-h-screen">
    <div class="w-full min-h-screen bg-gradient-to-b from-[#2c2c38] via-[#284265] to-[#2c2c38]">
        <div class="container mx-auto py-10 flex flex-col justify-center items-center ">
            <div class="w-full grid lg:grid-cols-2 grid-cols-1 gap-4 px-20 mt-2">
                <div class="w-full flex flex-col justify-center items-center">
                    <img class="w-80 object-cover rounded-lg mt-8"
                        src="https://scontent.fbkk7-3.fna.fbcdn.net/v/t1.6435-9/72731938_2574051899309409_6564049001522397184_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHRdSCBhPVfSRHFD0ZnBqCa0ezs0S4-0IbR7OzRLj7Qhvb2QYZg8X5pJOOvK9hzplvmzlihcZKxYiNmUhZXgr2M&_nc_ohc=eZg8mzG0RC0AX9OTElM&_nc_ht=scontent.fbkk7-3.fna&oh=00_AfBknZju5JYrdTMQdLS254QUpjyCIjXLNJGmSC4MkOTEpQ&oe=646D9870"
                        alt="" />
                </div>
                <div class="w-full px-8">
                    <div class="flex flex-col gap-4 py-4 mt-4 text-left text-white">
                        <div class="font-bold text-2xl mb-2">Concert's Remark details</div>
                        <div class="flex" v-for="(zone, index) in Zones" :key="zone.id">
                            <img v-if="index == 0" class="colorZone" src="../assets/zonegreen.png" alt="">
                            <img v-if="index == 1" class="colorZone" src="../assets/zpnebluecolor.png" alt="">
                            <img v-if="index == 2" class="colorZone" src="../assets/zonepurple.png" alt="">
                            <img v-if="index == 3" class="colorZone" src="../assets/zoneorange.png" alt="">
                            <p>&ensp; {{ zone.name }} : {{ zone.price }} THB</p>
                        </div>
                    </div>
                    <div class="ZoneAreaSelectBox relative mt-8 ">
                        <div>
                            <button @click="isOpen = !isOpen" type="button"
                                class="w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-2 py-4 bg-red-500 font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                id="Zones-menu" aria-haspopup="true" aria-expanded="true">
                                {{ selectedZone ? selectedZone.name + ' : ' + selectedZone.price + ' THB' : 'Select Zone' }}
                                <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                    fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd"
                                        d="M6.293 6.293a1 1 0 0 1 1.414 0L10 8.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z"
                                        clip-rule="evenodd" />
                                </svg>
                            </button>
                        </div>

                        <div v-show="isOpen"
                            class="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-red-500 ring-1 ring-black ring-opacity-5 focus:outline-none"
                            role="menu" aria-orientation="vertical" aria-labelledby="Zones-menu">
                            <div class="py-1" role="none">
                                <a v-for="zone in Zones" :key="zone.id" @click="selectZone(zone)"
                                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                    role="menuitem">
                                    {{ zone.name }} : {{ zone.price }} THB
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-end items-center mt-10">
                        <a v-if="selectedZone" @click="buy()"
                            class="w-48 rounded-md border border-gray-300 shadow-sm px-6 py-3 bg-[#FE862D] font-bold text-white hover:bg-[#e16f1a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Buy
                            Ticket -></a>
                    </div>
                </div>
            </div>
            <!-- <div class="grid grid-rows gap-4 border rounded-xl drop-shadow-lg border-[#c33838] px-20 mt-2">
                <div class="flex py-8">
                    <div class="w-1/2">
                        <div class="flex flex-col items-center">
                            <img class="zoneImage rounded-lg object-cover"
                                src="https://scontent.fbkk7-3.fna.fbcdn.net/v/t1.6435-9/72731938_2574051899309409_6564049001522397184_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHRdSCBhPVfSRHFD0ZnBqCa0ezs0S4-0IbR7OzRLj7Qhvb2QYZg8X5pJOOvK9hzplvmzlihcZKxYiNmUhZXgr2M&_nc_ohc=eZg8mzG0RC0AX9OTElM&_nc_ht=scontent.fbkk7-3.fna&oh=00_AfBknZju5JYrdTMQdLS254QUpjyCIjXLNJGmSC4MkOTEpQ&oe=646D9870"
                                alt="">
                        </div>
                    </div>
                    <div class="w-1/2 flex flex-col items-center justify-start">
                        <div>
                            <div class="font-bold text-white text-2xl mb-2">Concert's Remark details</div>
                            <br>
                            <div class="zone ml-4 text-xl text-white">
                                <div class="flex">
                                    <img class="colorZone" src="../assets/zonegreen.png" alt="">
                                    <p>&ensp; Zone (Green) : 4,800 THB</p>
                                </div>
                                <br>
                                <div class="flex">
                                    <img class="colorZone" src="../assets/zpnebluecolor.png" alt="">
                                    <p>&ensp; Zone (Blue) : 4,500 THB</p>
                                </div>
                                <br>
                                <div class="flex">
                                    <img class="colorZone" src="../assets/zonepurple.png" alt="">
                                    <p>&ensp; Zone (Purple) : 3,500 THB</p>
                                </div>
                                <br>
                                <div class="flex">
                                    <img class="colorZone" src="../assets/zoneorange.png" alt="">
                                    <p>&ensp; Zone (Orange) : 2,500 THB</p>
                                </div>
                            </div>
                        </div>
                        <div class="ZoneAreaSelectBox relative inline-block text-left mt-8">
                            <div>
                                <button @click="isOpen = !isOpen" type="button"
                                    class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-2 py-4 bg-red-500 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    id="Zones-menu" aria-haspopup="true" aria-expanded="true">
                                    {{ selectedZone.label }}
                                    <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                        fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd"
                                            d="M6.293 6.293a1 1 0 0 1 1.414 0L10 8.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </button>
                            </div>

                            <div v-show="isOpen"
                                class="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-red-500 ring-1 ring-black ring-opacity-5 focus:outline-none"
                                role="menu" aria-orientation="vertical" aria-labelledby="Zones-menu">
                                <div class="py-1" role="none">
                                    <a v-for="round in Zones" :key="round.value" @click="selectZone(round)"
                                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                        role="menuitem">
                                        {{ round.label }}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex mb-4">
                    <div class="w-1/2">
                        <router-link to="/detail"
                            class="selectZoneBtnLeft mb-4 px-4 py-2 bg-red-500 text-white font-bold rounded hover:bg-red-600">
                            ←
                        </router-link>
                    </div>
                    <div class="w-1/2">
                        <router-link to="/payment" v-if="selectedZone.value"
                            class="selectZoneBtnRight mb-4 px-4 py-2 bg-red-500 text-white font-bold rounded hover:bg-red-600">Buy
                            Ticket -></router-link>
                    </div>
                </div>


            </div> -->


        </div>
    </div>
</template>
<script>
import axios from 'axios';
import jwtDecode from "jwt-decode";
// import moment from 'moment';

export default {
    data() {
        return {
            isOpen: false,
            selectedZone: null,
            Zones: [],
            count: 1,
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
        axios.get("http://localhost:3000/getZoneByConcertId/" + id)
            .then((res) => {
                this.Zones = res.data.slice().reverse();
            })
            .catch((err) => {
                console.log(err);
            });
    },
    methods: {
        selectZone(zone) {
            this.selectedZone = zone;
            this.isOpen = false;
        },
        buy() {
            const token = localStorage.getItem("token");
            const decoded = jwtDecode(token);
            axios.post("http://localhost:3000/createTicket", {
                concertId: this.$route.params.concertId,
                roundId: this.$route.params.roundId,
                zoneId: this.selectedZone.id,
                userId: decoded.payload.id,
                price: this.selectedZone.price,
                count: this.count,
            })
                .then((res) => {
                    this.$router.push({ name: 'buyTicket', params: { paymentId: res.data.paymentId } })
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    },
};
</script>
<style>
.colorZone {
    width: 20px;
    height: 20px;
}

/* .selectZoneBtnRight {
    width: 20%;
    margin-left: 60%;
} */

.selectZoneBtnLeft {
    width: 20%;
    margin-right: 100%;
}

/* .ZoneAreaSelectBox {
    width: 60%;
} */

.zoneImage {
    width: 70%;
    height: 70%;
}
</style>