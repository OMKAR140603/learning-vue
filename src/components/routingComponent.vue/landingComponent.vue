<template>
    <br>
<RouterLink to="/HOME">HOME</RouterLink> <br>
<!-- <RouterLink to="/LOGIN">LOGIN</RouterLink> <br>  -->
<RouterLink to="/LOGIN/omkar"> omkars LOGIN</RouterLink> <br> 
<RouterLink to="/LOGIN/ram"> rams LOGIN</RouterLink> <br> 
<RouterLink to="/LOGIN/shyam"> shyams LOGIN</RouterLink> <br> 
<RouterLink to="/ABOUTUS">ABOUTUS</RouterLink> <br>
<RouterLink to="/404">404</RouterLink> <br>
<RouterLink to="/notfound">notfound</RouterLink> <br>
<router-view></router-view>
<counter></counter>
</template>
<script>
import { RouterLink } from 'vue-router';
import counter from "../toggle.vue"
export default {
    name: "landingComponent",
   
    components: { RouterLink,
        counter
    }
}
</script>
<style></style>