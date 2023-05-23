<template class="w-full min-h-screen">
  <div class="w-full min-h-screen bg-gradient-to-b from-[#2c2c38] via-[#284265] to-[#2c2c38]">
    <!-- <div v-if="isLoading" class="flex justify-center items-center h-screen">
      
      <div class="loading" style="color: rgb(253, 186, 116);">Loading...</div>
    </div> -->
    <div class="container mx-auto pt-10 flex justify-center items-center">
      <form
        class="w-7/12 flex flex-col gap-6 mt-8 pt-16 justify-center items-center border rounded-xl drop-shadow-lg border-[#D2CFCF] p-8 px-20">
        <h1 class="text-3xl font-bold text-white tracking-wide mb-5">Log in</h1>
        <div v-if="error" class="text-red-500">{{ error }}</div>
        <input type="text" class="w-96 p-2 px-5 border rounded-xl drop-shadow-lg border-[#D2CFCF] bg-[#F9FAFB]"
          placeholder="Username" v-model="username" />
        <input type="password" class="w-96 p-2 px-5 border rounded-xl drop-shadow-lg border-[#D2CFCF] bg-[#F9FAFB]"
          placeholder="Password" v-model="password" />
        <div class="flex justify-center items-center mt-4">
          <button type="submit" class="w-36 p-2 rounded-xl drop-shadow-lg bg-orange-300" @click="login">log in</button>
        </div>
        <div class="flex justify-center">
          <p class="tracking-wide text-white mb-2 mr-2">Don't have an account?</p>
          <router-link to="/signuppage" class="tracking-wide text-orange-300"> SIGN UP</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
/* ✓ GOOD */
import axios from 'axios';
export default {
  name: 'loginPage',
  // ...
  data() {
    return {
      username: '',
      password: '',
      error: null,
      // isLoading: false,
    };
  },
  methods: {
    login() {
      // this.isLoading = true;

      const data = {
        username: this.username,
        password: this.password,
      };

      axios.post('http://localhost:3000/login', data)
        .then((res) => {
          console.log(res);
          const token = res.data.token;
          localStorage.setItem('token', token);
          this.$router.go('/');
        })
        .catch((err) => {
          console.log(err);
          this.error = 'Wrong username or password!';
        })
        // .finally(() => {
        //   this.isLoading = false;
        // });
    },
  },



}
</script>