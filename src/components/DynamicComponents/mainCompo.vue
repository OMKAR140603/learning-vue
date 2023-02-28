<template>
<h1>Main Component in the dynamic components</h1>
<input type="button" @click="tab='javaCompo'" value="getJava">
<input type="button" @click="tab='mongoComp'" value="getMongo">
<input type="button" @click="tab='phpCompo'" value="getPhp">



<component :is="tab"></component>

</template>

<script>
import javaCompo from './javaCompo.vue';
import phpCompo from './phpCompo.vue';
import mongoComp from './mongoComp.vue';
export default {
    name: "mainCompo",
    components: {
        javaCompo,
        phpCompo,
        mongoComp
    },
    data(){
        return{

            tab:''
        }
    }
}
</script>

<style>
</style>
