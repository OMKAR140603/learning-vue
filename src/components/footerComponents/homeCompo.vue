<template>
<Teleport to="#footer"  >

<footerCompo></footerCompo>
</Teleport>

</template>
<script>
import footerCompo from './footerCompo.vue';
export default {
    name:'homeCompo',
    components:{
        footerCompo
    }
}
</script>
<style></style>