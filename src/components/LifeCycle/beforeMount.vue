<template>

    <h1>before created component called after the alert{{ name }}</h1>
</template>
<script>

export default {
    name:"beforeMount",
    data(){
        return{
            name:"omkar"
        }
    },
    beforeMount(){
      console.warn("beforemount",this.$el);       
        // alert("beforemount Component Called");
    },
    mounted(){
         console.warn("mounted",this.$el)
    }
}
</script>
<style>

</style>