<template>
<h1>post api form</h1>

<p>
{{ username }}
{{ password }}
</p>
<input type="text" name="" v-model="username" id="username" placeholder="username">
<br>
<br>
<input type="password" name="" v-model="password" id="password" placeholder="password">
<br>
<br>

<input v-on:click="getData()" type="button" value="click me">
</template>
<script>
import axios from "axios"
export default {
    name:"postApi",
    data(){
        return{
        username:"",
        password:""
        }
    },
    methods:{
      async  getData(){
        console.warn(this.username,this.password)
      let result =  await axios.post("http://localhost:3000/users",
        {
            username: this.username,
            password  : this.password       }
        )
        console.log(result)
        }
    }

}
</script>
<style></style>