<template>
<h1>hi this is count component</h1>
<input type="text">
<!-- <button v-on:click="func_count()">count on me</button> -->
<!-- <br>count is {{ count }} -->

</template>
<script>
export default {
name: 'countCompo',
data(){
    return{
        count:0,
    }
},
methods: {
    func_count(){
         return this.count++;
    }
}
}

</script>
<style>

</style>