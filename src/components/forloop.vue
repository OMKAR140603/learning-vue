<template>
<h1>for loop</h1>
<ol>
<li v-for="item in technology" :key="item">
{{ item }}
</li>
</ol>
<br>
<ul>
<li v-for="item in information" :key="item">
  password for {{ item.user }} :{{ item.password }}
</li>

</ul>
</template>
<script>
export default {
    name: "forLoop",
    data(){
        return{
        technology :['java','php','html','css','python'],
        information:[
            {
                user:"omkar123",
                password:"test123"
            },{
                user:"raj123",
                password:"test456"
            },{
                user:"tejas123",
                password:"test789"
            }
        ]
        }
    }
}
</script>
<style>

</style>