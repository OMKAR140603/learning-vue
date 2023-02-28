<template>

<div>
{{ text }} <br>
<div v-html="tag"></div>
<div v-html="tag2"></div>
</div>

<div :class="applyStyle">
<p >basic component with dynamic bg</p>
</div>
<div>
<!-- <input type="button" v-on:click="getData()" value="hiding"> -->
<!-- <input type="button" v-on:click="getData2()" value=" restoring"> -->
<input type="button" v-on:click="colorfull=!colorfull" value="toggle">
</div>
</template>
<script>
export default {
    name :'htmlBinding',
    data(){
        return{
            text :"hi this is omkar",
            tag : "<h1>hi this is omi</h1>",
            tag2 :"<h2>hi this is omii again</h2>",
            colorfull:true,
        }
    },
    methods: {
        getData()
        {
            this.colorfull=false
        },
        getData2(){
            this.colorfull=true
        },
        
    },
    computed:{
        applyStyle(){
         return{
            color:this.colorfull,
            err:true,
        other :true,
         }
        }
    }
}
</script>
<style>
.color{
    background-color: blueviolet;
}
.err{
    color: red;
}
.other{
    font-style: italic;
}
</style>