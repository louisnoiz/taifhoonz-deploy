<template>
  <div id="wrapper">
    <nav class="flex items-center justify-between flex-wrap bg-[#2c2c38] border-b border-b-gray-500 p-6 ">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <img class="fill-current h-8 w-8 mr-2" src="./assets/taifhoonz_logo.png" alt="" />
        <a href="/" class="font-semibold text-xl tracking-wide">
          Taifhoonz Tickets
        </a>
      </div>
      <div class="block lg:hidden">
        <button
          class="flex items-center px-3 py-2 border rounded text-orange-200 border-orange-400 hover:text-white hover:border-white">
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto text-white tracking-wide">
        <div class="text-sm lg:flex-grow">
          <a class="block mt-4 lg:inline-block lg:mt-0 text-lg mr-4 hover:text-slate-900">
            <router-link to="/">Home</router-link>
          </a>
          <a class="block mt-4 lg:inline-block lg:mt-0 mr-4 text-lg hover:text-slate-900">
            <router-link to="/loginpage">Login</router-link>
          </a>
          <a class="block mt-4 lg:inline-block lg:mt-0 mr-4 text-lg hover:text-slate-900">
            <router-link to="/signuppage">Signup</router-link>
          </a>
          <a class="block mt-4 lg:inline-block lg:mt-0 text-lg hover:text-slate-900 mr-4">
            <router-link to="/detail/1">Detail</router-link>
          </a>
          <a class="block mt-4 lg:inline-block lg:mt-0 text-lg hover:text-slate-900 mr-4">
            <router-link to="/selectzone/1">ZoneArea</router-link>
          </a>
          <a class="block mt-4 lg:inline-block lg:mt-0 text-lg hover:text-slate-900 mr-4">
            <router-link to="/payment">Payment</router-link>
          </a>
          <a class="block mt-4 lg:inline-block lg:mt-0 text-lg hover:text-slate-900 mr-4">
            <router-link to="/allConcert">Concert</router-link>
          </a>
          <a class="block mt-4 lg:inline-block lg:mt-0 text-lg hover:text-slate-900 mr-4">
            <router-link to="/admin">Admin page</router-link>
          </a>
          <a class="block mt-4 lg:inline-block lg:mt-0 text-lg hover:text-slate-900 mr-4">
            <router-link to="/edit">Admin edit</router-link>
          </a>
        </div>
        <div class="flex justify-center items-center">
          <a class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-slate-900 mr-4">
            <router-link to="/myticket">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="IconChangeColor" height="25" width="25">
                <path fill="#ffffff" stroke="#ffffff" stroke-miterlimit="10" stroke-width="32"
                  d="M366.05,146a46.7,46.7,0,0,1-2.42-63.42,3.87,3.87,0,0,0-.22-5.26L319.28,33.14a3.89,3.89,0,0,0-5.5,0l-70.34,70.34a23.62,23.62,0,0,0-5.71,9.24h0a23.66,23.66,0,0,1-14.95,15h0a23.7,23.7,0,0,0-9.25,5.71L33.14,313.78a3.89,3.89,0,0,0,0,5.5l44.13,44.13a3.87,3.87,0,0,0,5.26.22,46.69,46.69,0,0,1,65.84,65.84,3.87,3.87,0,0,0,.22,5.26l44.13,44.13a3.89,3.89,0,0,0,5.5,0l180.4-180.39a23.7,23.7,0,0,0,5.71-9.25h0a23.66,23.66,0,0,1,14.95-15h0a23.62,23.62,0,0,0,9.24-5.71l70.34-70.34a3.89,3.89,0,0,0,0-5.5l-44.13-44.13a3.87,3.87,0,0,0-5.26-.22A46.7,46.7,0,0,1,366.05,146Z"
                  id="mainIconPathAttribute"></path>
                <line fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="32" stroke-linecap="round" x1="250.5"
                  y1="140.44" x2="233.99" y2="123.93"></line>
                <line fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="32" stroke-linecap="round"
                  x1="294.52" y1="184.46" x2="283.51" y2="173.46"></line>
                <line fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="32" stroke-linecap="round"
                  x1="338.54" y1="228.49" x2="327.54" y2="217.48"></line>
                <line fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="32" stroke-linecap="round"
                  x1="388.07" y1="278.01" x2="371.56" y2="261.5"></line>
              </svg></router-link>
          </a>
          <svg @click="() => (this.modalNotify = !this.modalNotify)" width="25" height="25" stroke-width="1.5"
            viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" id="IconChangeColor">
            <path
              d="M18.1336 11C18.7155 16.3755 21 18 21 18H3C3 18 6 15.8667 6 8.4C6 6.70261 6.63214 5.07475 7.75736 3.87452C8.88258 2.67428 10.4087 2 12 2C12.3373 2 12.6717 2.0303 13 2.08949"
              stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" id="mainIconPathAttribute" fill="#ffffff">
            </path>
            <path
              d="M19 8C20.6569 8 22 6.65685 22 5C22 3.34315 20.6569 2 19 2C17.3431 2 16 3.34315 16 5C16 6.65685 17.3431 8 19 8Z"
              stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" id="mainIconPathAttribute" fill="#ffffff">
            </path>
            <path
              d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21"
              stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" id="mainIconPathAttribute" fill="#ffffff">
            </path>
          </svg>
          <button class="block ml-4 mt-4 lg:inline-block lg:mt-0 text-white text-lg hover:text-slate-900 mr-4"
            @click="() => handleAccount()">
            <!-- <router-link to="/editprofile">Username</router-link> -->
            {{ username }}
          </button>
        </div>
      </div>
    </nav>
    <div v-if="this.modal">
      <div class="w-full h-max flex justify-end items-start absolute z-10">
        <div class="container w-1/5 mt-1 mr-1 drop-shadow-lg border tracking-wide text-center rounded-lg bg-white">
          <div class="m-8">
            <div class="flex flex-col gap-5 mt-3 text-start">
              <label htmlFor="first-name" className="block leading-6 text-gray-900">
                Name : {{ fullname }}
              </label>
              <label htmlFor="first-name" className="block leading-6 text-gray-900">
                Email : {{ email }}
              </label>
              <div class="flex justify-center items-center">
                <button class="w-1/2 p-1 border rounded-lg bg-rose-500 text-white" @click="logout">
                  Log out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="this.modalNotify">
      <div class="w-full h-max flex justify-end items-start absolute z-10">
        <div class="container w-1/5 mt-1 p-3 mr-1 drop-shadow-lg border tracking-wide text-start rounded-lg bg-white">
          <div v-for="item, index in notification" :key="index">
            <router-link :to="`/detail/${item.concertId}`" @click="handleNotify">
              <div v-if="index < 6 && index !== 5" class="border-b p-2 border-gray-600">
                {{ item.description }}
                <!-- For new concert -->
                <span v-if="index === 0" class="text-green-500">New !!</span>
              </div>
              <div v-else-if="index === 5" class=" p-2 border-gray-600">
                {{ item.description }}
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <router-view :key="$route.fullPath" @auth-change="onAuthChange" />
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
import jwtDecode from "jwt-decode";
import axios from 'axios';

export default {
  name: "App",
  components: {
    RouterLink,
  },
  data() {
    return {
      modal: false,
      modalNotify: false,
      id: "",
      fullname: "",
      email: "",
      username: "",
      notification: null,
    };
  },
  mounted() {
    this.onAuthChange();
  },
  methods: {
    logout() {
      localStorage.removeItem("token");
      this.$router.go("/loginpage");
      this.fullname = "";
      this.email = "";
      this.username = "username";
    },
    onAuthChange() {
      const token = localStorage.getItem("token");
      if (token) {
        const decoded = jwtDecode(token);
        this.id = decoded.payload.id;
        this.username = decoded.payload.username;
        this.fullname = decoded.payload.fullName;
        this.email = decoded.payload.email;
        this.GetNotification();
      }
    },
    GetNotification() {
      axios.get('http://localhost:3000/getAllNotification')
        .then((res) => {
          this.notification = res.data
        })
        .catch((err) => {
          console.log(err)
          this.notification = null;
        })

    },
    handleAccount() {
      this.modal = !this.modal
      this.modalNotify = false
    },
    handleNotify() {
      this.modalNotify = !this.modalNotify
      this.modal = false
    }
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@300&family=Prompt:wght@200;300;500&display=swap");

#app {
  font-family: "Noto Sans Thai", sans-serif;
  font-family: "Prompt", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  background-color: rgb(253, 252, 236);
}

#wrapper {
  width: auto;
  background-color: #2c3e50;
  background-image: linear-gradient(#2c2c38, #284265, #2c2c38);
  height: 100%;
}

#ticket {
  background-color: #2c3e50;
  background-image: linear-gradient(#2c2c38, #284265, #2c2c38);
  height: 100%;
}

#imgshow {
  height: 100%;
}

.ticketbtn {
  width: 30px;
  height: 30px;
}
</style>
