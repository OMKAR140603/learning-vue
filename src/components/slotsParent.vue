<template>
<h1>slots parent</h1>
<childCompo>

<template v-slot:header>
    <h1 >this is omkar</h1>
</template>
<template v-slot:anchor>
    <a href="">omkar</a>
</template>

</childCompo>
</template>

<script>
import childCompo from './slotsChild.vue'
export default {
    name: "slotsParent",
    components: {
        childCompo
    }

}
</script>

<style></style>
