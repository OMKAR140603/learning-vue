<template>
<h2>parent component</h2>

<ul>

<li v-for="item in usersData" :key="item">
<userCompo :info="item">
</userCompo>
</li>


</ul>

</template>

<script>
import userCompo from './userComponent.vue'
export default {
    name: 'parentComponent',
    components: {
        userCompo,
    },
    data() {
        return {
            usersData: [{ username: "omkar123", password: "pqejdjm234" }, 
            { username: "okar123", password: "pqejjm234" },
             { username: "omkar13", password: "pqedjm234" },
              { username: "omkar123", password: "pqejdjm" } ]
        }
    }
}
</script>

<style scoped></style>
