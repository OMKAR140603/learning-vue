<template>
<input type="button" value="by-click-highlight" v-on:click="getData()">
 
<!-- <input type="text"  ref="input"> -->
<div>


<countinc ref="input" ></countinc>
</div>
<!-- <button ref="input">what</button> -->
</template>
<script> 
import countinc from './countinc.vue';
export default {
name:"refInfo",
methods:{
    getData(){
        console.warn("event occurr")
     this.$refs.input.focus();
     this.$refs.input.style.color="red"
    //  let val = this.$refs.input.value;
    //  console.warn(val)
    }
},
components:{
    countinc
}

}
</script>
<style>
.input{
    background-color: black;
    font-style: italic;
}
</style>