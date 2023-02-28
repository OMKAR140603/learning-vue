this is child component whose parent is cardinfo.vue 
<template>
    <h1>this is child component</h1>
    <!-- <div> {{ getName }}</div> -->
    <input type="button" value="fetchname" v-on:click="getName(userName)">
    </template>
    <script>
  
    export default {
        name:"nameCard",
        data(){
            return{
            userName:"proffesor"
            }
        },
        components:{
      
        },
        methods:{
    
        },
        props:{
           getName:Function
        }
    
    }
    </script>
    <style></style>