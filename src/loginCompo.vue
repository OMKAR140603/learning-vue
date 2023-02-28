<template>
    <h1>Login Page</h1>
    <p> this is username:+{{ details.username }}</p>
    <p> this is password:+{{ details.password }}</p>
    <p> this is selected country:+{{ details.country }}</p>
    <p> this are selected technology:+{{ details.technology1 }}</p>
    <p> this are selected technology:+{{ details.technology2 }}</p>
    <label for="username">
    
    Username:<input type="email" v-model="details.username" name="" id="username" placeholder="email"> 
    </label>
    <br>
    <br>
    <label for="password">
    
    Password:<input type="password" v-model="details.password" name="" id="password" placeholder="password">
    </label>
    <br>
    <input type="button" v-on:click="getDetails()" value="login" >
    <br><br>
    <select name="country" v-model="details.country" id="" >
    <option value="" >India</option>
    <option value="" >USA</option>
    <option value="">China</option>
    
    </select>
    <br><br>
    <h3>Technology</h3>
    Vue.js <input type="checkbox" name="Vue.js" id="" v-model="details.technology1"> <br>
    React <input type="checkbox" name="React" id="" v-model="details.technology2">
    
    
    </template>

<script>
export default {
name:"loginCompo",
data(){
return{
    
     details:{
         username:"",
         password:"",
         country:"",
         grnder:"",
         technology1:"",
         technology2:""
     }
}
},
methods:{
getDetails(){
    console.warn("login details are ",this.details)
}
}

}


</script>
<style></style>
