<template class="w-full h-screen">
    <div class="container mx-auto flex flex-col justify-center items-center">
        <div class="w-full flex justify-left pt-10">
            <div class="w-1/12"></div>
            <div class="w-8/12">
                <input class="w-2/3 p-2 bg-white text-lg text-center border border-gray-500/30 rounded-lg"
                    placeholder="Search" />
            </div>
            <div class="w-3/12 flex flex-row gap-5 justify-end">
                <router-link to="/create"><button
                        class="w-24 rounded bg-blue-500 hover:bg-blue-600 text-white text-lg py-2">Create</button></router-link>
                <button v-if="!handleDelete" @click="() => handleDelete = true"
                    class="w-24 rounded bg-red-500 hover:bg-red-600 text-white py-2 text-lg">Delete</button>
                <button v-else @click="() => handleDelete = false"
                    class="w-24 rounded bg-gray-500 hover:bg-gray-600 text-white py-2 text-lg">Cancel</button>
            </div>
        </div>
        <div class="w-full grid lg:grid-cols-4 md:grid-cols-2 grid-rows gap-8 my-10">
            <div className="w-full grid mb-5" id="app" v-for="(item, index) in this.namelist" :key="index">
                <a href="" class="shadow-md rounded">
                    <router-link :to="`/edit/${item.id}`">
                        <div class="w-full py-5 flex flex-col gap-4 justify-center items-center">
                            <div class="bg-cover bg-center w-auto h-96">
                                <div class="w-72 h-72"><img :src="`http://localhost:3000/${item.image}`" alt=""/></div>
                            </div>
                            <div class="flex flex-col gap-3 px-11">
                                <span class="font-bold text-left">
                                    {{ item.name }}
                                </span>
                            </div>
                        </div>
                    </router-link>
                </a>
                <div class="w-full flex flex-row" v-if="handleDelete">
                    <button @click="() => deleteConcert(item.id)"
                        class="w-full h-16 text-white text-lg flex justify-center items-center py-2 bg-red-500 rounded-b-lg hover:bg-red-600">Delete</button>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios';

export default {
    name: 'adminMain',
    props: {
        msg: String
    },
    data() {
        return {
            handleDelete: false,
            img_concert: {
                backgroundImage: `url(${require("../assets/img_concert.jpg")})`,
            },
            namelist: [],
        };
    },
    mounted() {
        axios
            .get('http://localhost:3000/getAllConcert')
            .then((res) => {
                this.namelist = res.data;
            })
    },
    methods: {
        deleteConcert(id) {
            axios
                .delete(`http://localhost:3000/delConcertById/${id}`)
                .then((res) => {
                    console.log(res)
                }).catch(err => {
                    console.log(err);
                })
            this.$router.go('/admin');
        }
    },
}
</script>
  
<style scoped>
h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
  