<template>
    <div>
    <h2>child component {{ count }}</h2>
    <h3>{{ details.email }}</h3>
    <button v-on:click="getData()">cklick </button>
    </div>
</template>
<script>
export default {
    name:'ChildComponents',
    props:{
        count:Number,
        details:Object,
        getData:Function,


    }
}
</script>
<style></style>