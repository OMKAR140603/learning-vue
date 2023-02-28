<template>
<img v-on:mousemove="func3()" alt="Vue logo" src="./assets/logo.png">
 <!-- <HelloWorld msge="Welcome to Your Vue.js App"/> 
<HomeComponent></HomeComponent>
<countCompo ></countCompo>
<toggleComponent></toggleComponent>
<forLoop></forLoop>
<parentCompo></parentCompo>
<htmlBinding></htmlBinding>
<cardInfo></cardInfo>
<br>
<refInfo></refInfo>
<loginCompo></loginCompo>
<slotsParent></slotsParent>
<dynamicCompo></dynamicCompo>
<homeCompo></homeCompo> -->
<!-- <beforeCreate></beforeCreate> -->
<!-- <beforeMount></beforeMount> -->
<!-- <landingComponent></landingComponent> -->
<!-- <getApi></getApi> -->
<postApi></postApi>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import HomeComponent from './components/Home.vue'
// import countCompo from './components/countinc.vue'
// import toggleComponent from './components/toggle.vue'
// import forLoop from './components/forloop.vue'
// import parentCompo from './components/parentCompo.vue'
// import htmlBinding from './htmlBinding.vue'
// import cardInfo from './components/cardInfo.vue'
// import refInfo from './components/refInfo.vue';
// import loginCompo from './loginCompo.vue';
// import slotsParent from './components/slotsParent.vue';
// import dynamicCompo from './components/DynamicComponents/mainCompo.vue'
// import homeCompo from './components/footerComponents/homeCompo.vue';
// import beforeCreate from './components/LifeCycle/beforeCreate.vue';
// import beforeMount from './components/LifeCycle/beforeMount.vue';
// import landingComponent from "./components/routingComponent.vue/landingComponent.vue"
// import getApi from './components/API/getApi.vue';
import postApi from "./components/API/postApi.vue"
export default {
    name: 'App',
    components: {
//         HelloWorld,
//         HomeComponent,
//         countCompo ,
//         toggleComponent,
//         forLoop,
//         parentCompo,
//         htmlBinding,
//         cardInfo,
//          refInfo,
//         loginCompo,
       
//         slotsParent,
//         dynamicCompo,
//         homeCompo,
// beforeCreate,
// beforeMount
// landingComponent
// getApi
postApi
    }
//     methods: {
//         func3() {
//             console.warn("image hovered");
//         }
//     },

}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* text-align: center; */
    color: #2c3e50;
    margin-top: 60px;
}
</style>
