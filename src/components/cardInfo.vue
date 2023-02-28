// this is parent component
<template>
<h1>this is parent component {{ localuser }} </h1>

<nameCard :getName="getUsername"   ></nameCard>
</template>
<script>
import nameCard from './nameCard.vue'
export default {
    name:"cardInfo",
    data(){
        return{
        localuser:""
        }
    },
    components:{
     nameCard
    },
    methods:{
     getUsername(name){
        this.localuser=name
    // alert("the character is "+name)
     }
    },
    props:{

    }

}
</script>
<style></style>