<template class="w-full h-full">
    <div  class="w-full min-h-screen bg-gradient-to-b from-[#2c2c38] via-[#284265] to-[#2c2c38]">
        <div class="container mx-auto py-10 flex flex-col justify-center items-center">
            <div id="ticket" class="w-full flex flex-col gap-4 px-10 h-24 text-start">
                <label class="text-2xl text-white font-semibold tracking-wide">My Tickets</label>
                <div class="w-full mb-5 border-b border-gray-300"></div>
                <div class="w-full flex flex-col gap-8 justify-center items-center">
                    <div class="w-8/12 rounded p-5 flex flex-col gap-4" :style="cssProps" v-for="item, index in ticket"
                        :key="index">
                        <div class="w-full bg-white rounded px-5 py-10 flex flex-row gap-4">
                            <div
                                class="w-9/12 flex flex-col gap-3 pr-4 border-r-2 border-dashed border-[#284265] justify-center items-center text-center">
                                <p class="text-2xl font-semibold tracking-wide">{{ item.concert.name }}</p>
                                <p class="text-gray-500">{{ item.concert.location }}</p>
                                <div class="w-10/12 border-y-2 py-2 border-dashed border-[#284265] flex flex-row gap-2">
                                    <div class="w-6/12 font-semibold text-lg p-2 flex flex-col justify-center items-center border-r-2 border-dashed border-[#284265]">
                                        <p class="text-lg font-semibold text-gray-500">DATE</p>
                                        <p class="text-2xl font-semibold">{{ new Date(item.round.date).toDateString()}}</p>
                                    </div>
                                    <div class="w-6/12 p-2 pr-3 flex flex-col">
                                        <p class="text-lg font-semibold text-gray-500">TIME</p>
                                        <p class="text-2xl font-semibold">{{ new Date(item.round.startTime).toTimeString().slice(0, 5)}} - {{ new Date(item.round.endTime).toTimeString().slice(0, 5)}}</p>
                                    </div>
                                </div>
                                <button v-if="item.payment.status === 'PENDING'" @click="() => payment(item.paymentId)" class="border-2 px-4 py-1 mt-1 text-lg rounded border-orange-400 bg-orange-400 text-white font-semibold tracking-wide hover:bg-orange-500 hover:border-orange-500">Pay now</button>
                            </div>
                            <div class="w-2/12 px-2 ml-3 flex flex-col gap-2">
                                <div class="flex flex-row gap-4 items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="IconChangeColor"
                                        height="70" width="70">
                                        <path fill="#3b8cf7" stroke="#000" stroke-miterlimit="10" stroke-width="32"
                                            d="M366.05,146a46.7,46.7,0,0,1-2.42-63.42,3.87,3.87,0,0,0-.22-5.26L319.28,33.14a3.89,3.89,0,0,0-5.5,0l-70.34,70.34a23.62,23.62,0,0,0-5.71,9.24h0a23.66,23.66,0,0,1-14.95,15h0a23.7,23.7,0,0,0-9.25,5.71L33.14,313.78a3.89,3.89,0,0,0,0,5.5l44.13,44.13a3.87,3.87,0,0,0,5.26.22,46.69,46.69,0,0,1,65.84,65.84,3.87,3.87,0,0,0,.22,5.26l44.13,44.13a3.89,3.89,0,0,0,5.5,0l180.4-180.39a23.7,23.7,0,0,0,5.71-9.25h0a23.66,23.66,0,0,1,14.95-15h0a23.62,23.62,0,0,0,9.24-5.71l70.34-70.34a3.89,3.89,0,0,0,0-5.5l-44.13-44.13a3.87,3.87,0,0,0-5.26-.22A46.7,46.7,0,0,1,366.05,146Z"
                                            id="mainIconPathAttribute"></path>
                                        <line fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="32"
                                            stroke-linecap="round" x1="250.5" y1="140.44" x2="233.99" y2="123.93"></line>
                                        <line fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="32"
                                            stroke-linecap="round" x1="294.52" y1="184.46" x2="283.51" y2="173.46"></line>
                                        <line fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="32"
                                            stroke-linecap="round" x1="338.54" y1="228.49" x2="327.54" y2="217.48"></line>
                                        <line fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="32"
                                            stroke-linecap="round" x1="388.07" y1="278.01" x2="371.56" y2="261.5"></line>
                                    </svg>
                                    <p>Taifhoonz Tickets</p>
                                </div>
                                <div class="flex flex-col gap-1 mb-3">
                                    <p class="text-center text-lg font-semibold">{{item.count}} TICKET</p>
                                </div>
                                <p class="text-center text-3xl text-orange-400 font-semibold">{{item.price}} THB</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import jwtDecode from 'jwt-decode';

export default {
    // components: { FileComponent },
    data() {
        return {
            ticket: [],
            id: null,
            cssProps: {
                backgroundImage: `url(${require("../assets/wall.png")})`,
            },
        };
    },
    methods: {
        payment(id) {
            this.$router.push({ name: 'buyTicket', params: { paymentId: id } })
        }
    },
    beforeCreate() {
        if (localStorage.getItem('token')) {
            const token = localStorage.getItem('token');
            const decoded = jwtDecode(token);
            this.id = decoded.payload.id;
            axios.get(`http://localhost:3000/getTicketByUserId/${decoded.payload.id}`)
                .then((res) => {
                    this.ticket = res.data;
                })
        }
    },
};
</script>
<style>
.card {
    width: 75%;
    height: 100%;
}
</style>