<template>
<!-- <h1>Personal Info</h1> -->
<!-- <h3>Email:{{ email }}</h3> -->
<!-- <h3>phn number :{{ phn_number }}</h3> -->
<!-- <h3>Name:{{ getName() }}</h3> -->
<!-- <h3>Cgpa 8.91 in the {{ cgpa.indexOf(8.88)+1 }} semester</h3> -->

<!-- <input type="text" name="" id="" v-model="count">
<h3>{{ count }}</h3>
<input type="email" placeholder="email" name="" id="" v-model="email"> <br> <br>
<input type="password" placeholder="password" name="" id="" v-model="password"> <br><br>
<button v-on:click="getvalues()">get values</button> <br>
<div>Checked names: {{ checkedNames }}</div> -->

<!-- <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
<label for="jack">Jack</label>

<input type="checkbox" id="john" value="John" v-model="checkedNames">
<label for="john">John</label>

<input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
<label for="mike">Mike</label> -->

<!-- <button v-on:click="func1()" >click me</button> -->
<!-- <button v-on:dblclick="func2()" >click me</button> -->

<ChildComponents count="15" :details="user" :getData="getData"></ChildComponents>

</template>
<script>
import ChildComponents from './ChildComponents.vue'
export default {
    name:'HomeComponent',
    components:{ ChildComponents  },
    data(){
        return{
            
            checkedNames:[],
            email :null,
            password :null,
            phn_number :'9370699097',
            getName : function() {
                return "Omkar s tilekar"
            },
            cgpa :[8.88,8.91,9.86],
            count:15,
            user:{name:"omkar",email:"omakr@gmail.com"}
        }
    },
    methods: {
        func1(){
            console.log("onclickked");
        },
        func2(){
            console.log("ondblclickked");
        },
        getvalues(){
             console.warn("values are",this.email,this.password)
        }
        ,
        getData(){
            console.warn("parent called")
        }
    }
}
</script>
<style scoped>
h1{
    color: red;
}
</style>