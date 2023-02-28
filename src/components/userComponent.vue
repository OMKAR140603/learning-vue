<template>
    <!-- <h1>user component for reuse</h1> -->
   <h3>{{ info.username }}</h3>
   <h2>{{ info.password }}</h2>
</template>
<script>
 export default {
    name:'userCompo',
    props:{
        info:Object
    }
 }
</script>
<style scoped>

</style>