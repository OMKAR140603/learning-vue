<template>
<h1>slotschild</h1>

<div class="component">


<header>
<slot name="header"></slot>
</header>
<anchor>
<slot name="anchor"></slot>
</anchor>
</div>
</template>
<script>
export default {
    name:"slotsChild",
    props:{
        
    },
}

</script>
<style scoped>
.component{
    border: 2px solid red;
}
</style>