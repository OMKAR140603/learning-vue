<template>
<h1>API BY GET </h1>
<div>
<ul  class="attr" v-for="i in list" :key="i.id">
<li>{{ i.id }}</li>
<li>{{ i.email }}</li>
<li>{{ i.first_name }}</li>
<li>{{ i.last_name }}</li>
<li><img :src=" i.avatar " alt=""></li>
</ul>
</div>
</template>
<script>
import axios from "axios"
export default {
    name:"getApi",
    data(){
        return{

            list:[]
        }
    },
    async mounted() {
        let result=axios.get("https://reqres.in/api/users?page=1")
        console.warn("result",(await result).data.data)
        this.list=(await result).data.data
    },

}
</script>
<style>
.attr{
/* display: inline-block; */
}
.attr li{
    /* display: inline-block;
    padding: 10px;
     */

}
</style>