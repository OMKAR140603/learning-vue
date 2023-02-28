<template>
    <div v-if="show">
    <button type="submit">submit</button>
    </div>
    <div v-else> 
    <h1>please tick the checkbox</h1>
    </div>
    <input type="checkbox"  v-on:click="show=!show" name="tick" id="">
<!-- <button  v-on:click="show=!show">hit me</button> -->
</template>
<script>
export default {
name:"toggleComponent",
data(){
return{
    show:false,
}
}
}
</script>
<style>
</style>