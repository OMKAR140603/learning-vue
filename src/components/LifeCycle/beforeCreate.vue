<template>

    <h1>before created component called after the alert</h1>
</template>
<script>

export default {
    name:"beforeCreated",
    beforeCreate(){
        
        alert("beforeCreated Component Called");
    },
    created(){
        window.print()
    }
}
</script>
<style>

</style>