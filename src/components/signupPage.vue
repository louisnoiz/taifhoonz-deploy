<template class="w-full min-h-screen">
  <div class="w-full min-h-screen bg-gradient-to-b from-[#2c2c38] via-[#284265] to-[#2c2c38]">
    <div class="container mx-auto pt-10 flex justify-center items-center">

      <div
        class="w-7/12 flex flex-col gap-6 mt-8 pt-16 justify-center items-center border rounded-xl drop-shadow-lg border-[#D2CFCF] p-8 px-20">
        <h1 class="text-3xl font-bold text-white tracking-wide mb-5">Sign Up</h1>
        <div class="flex justify-center items-center">
          <form class="w-full grid grid-rows gap-6">
            <div class="grid grid-cols-2 gap-4">
              <p>
                <input type="text" class="p-2 px-5 border rounded-xl drop-shadow-lg border-[#D2CFCF] bg-[#F9FAFB]"
                  placeholder="First name" v-model="state.firstname" :class="{'border-red-500': v$.firstname.$error}"/>
              </p>
              <p>
                <input type="text" class="p-2 px-5 border rounded-xl drop-shadow-lg border-[#D2CFCF] bg-[#F9FAFB]"
                  placeholder="Last name" v-model="state.lastname" :class="{'border-red-500': v$.lastname.$error}"/>
              </p>
              <!-- <span v-if="v$.firstname.$error" style="color: red;"> {{ v$.firstname.$errors[0].$message }} </span>
              <span v-if="v$.lastname.$error" style="color: red;"> {{ v$.lastname.$errors[0].$message }} </span> -->
            </div>
            <input type="text" class="p-2 px-5 border rounded-xl drop-shadow-lg border-[#D2CFCF] bg-[#F9FAFB]"
              placeholder="Username" v-model="state.username" :class="{'border-red-500': v$.username.$error}"/>
            <!-- <span v-if="v$.username.$error" style="color: red;"> {{ v$.username.$errors[0].$message }} </span> -->

            <input type="text" class="p-2 px-5 border rounded-xl drop-shadow-lg border-[#D2CFCF] bg-[#F9FAFB]"
              placeholder="Phone" v-model="state.phone" :class="{'border-red-500': v$.phone.$error}"/>
            <!-- <span v-if="v$.phone.$error" style="color: red;"> {{ v$.phone.$errors[0].$message }} </span> -->

            <input type="username" class="p-2 px-5 border rounded-xl drop-shadow-lg border-[#D2CFCF] bg-[#F9FAFB]"
              placeholder="Email" v-model="state.email" :class="{'border-red-500': v$.email.$error}"/>
            <!-- <span v-if="v$.email.$error" style="color: red;"> {{ v$.email.$errors[0].$message }} </span> -->

            <div class="grid grid-cols-2 gap-4">
              <p>
                <input type="password" class="p-2 px-5 border rounded-xl drop-shadow-lg border-[#D2CFCF] bg-[#F9FAFB]"
                  placeholder="Password" v-model="state.password.password" :class="{'border-red-500': v$.password.password.$error}"/>
              </p>
              <p>
                <input type="password" class="p-2 px-5 border rounded-xl drop-shadow-lg border-[#D2CFCF] bg-[#F9FAFB]"
                  placeholder="Confirm Password" v-model="state.password.confirmpassword" :class="{'border-red-500': v$.password.confirmpassword.$error}"/>
              </p>
              <!-- <span v-if="v$.password.password.$error" style="color: red;"> {{ v$.password.password.$errors[0].$message
              }}</span> -->
              <!-- <span v-if="v$.password.confirmpassword.$error" style="color: red;"> {{
                v$.password.confirmpassword.$errors[0].$message }}</span> -->
            </div>
            <div class="flex justify-center items-center mt-4">
              <button type="submit" class="w-1/2 p-2 rounded-xl drop-shadow-lg bg-orange-300" @click="signup">Create an
                account</button>
            </div>
            <div class="flex justify-center">
              <p class="tracking-wide text-white mb-2 mr-2">Already have an account?</p>
              <router-link to="/loginpage" class="tracking-wide text-orange-300"> SIGN IN</router-link>
            </div>
          </form>
        </div>
      </div>



    </div>


  </div>
</template>
  
<script>
/* ✓ GOOD */
import axios from 'axios';
import useValidate from '@vuelidate/core'
import { required, minLength, sameAs, email } from '@vuelidate/validators'
import { computed, reactive } from 'vue';


export default {
  name: 'signupPage',
  // ...
  setup() {
    const state = reactive({
      username: '',
      firstname: '',
      lastname: '',
      password: {
        password: '',
        confirmpassword: '',
      },
      phone: '',
      email: '',
    })

    const rules = computed(() => ({
      username: { required },
      firstname: { required },
      lastname: { required },
      password: {
        password: { required, minLength: minLength(8) },
        confirmpassword: { required, sameAs: sameAs(state.password.password) },
      },
      phone: { required },
      email: { required, email },
    }))

    const v$ = useValidate(rules, state)

    return {
      state,
      v$,
    }
  },
  validations: {
    username: { required },
    firstname: { required },
    lastname: { required },
    password: {
      password: { required },
      confirmpassword: { required },
    },
    phone: { required },
    email: { required },
  },
  methods: {
    signup() {
      this.v$.$validate()
      if (!this.v$.$error) {
        const data = {
          username: this.state.username,
          fullName: this.state.firstname + ' ' + this.state.lastname,
          password: this.state.password.password,
          phone: this.state.phone,
          email: this.state.email
        };
        axios.post('http://localhost:3000/signup', data)
          .then((res) => {
            console.log(res);
            this.$router.push('/loginpage');
          })
          .catch((err) => {
            console.log(err);
            alert('Username or Email already exists');
            window.location.reload();
          });
      }
      else {
        alert('Please fill in all the fields');
        this.$router.push('/signuppage');
      }

    },
  },
}
</script>