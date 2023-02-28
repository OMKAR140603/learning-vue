<template>
    <h1> {{prname  }} LOGIN</h1>
</template>
<script>
import {useRoute} from 'vue-router'
export default {
    name:"LOGIN",
    data(){
        return{
            prname:""
        }
    },
    mounted(){
        const route =useRoute();
        console.warn("profile_name",route.params.name)
        this.prname =route.params.name
    },
    
}
</script>
<style></style>