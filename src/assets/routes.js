import { createWebHistory } from "vue-router"
import { createRouter } from "vue-router"
import HOME from "../components/routingComponent.vue/HOME.vue"
import LOGIN from "../components/routingComponent.vue/LOGIN.vue"
import ABOUTUS from "../components/routingComponent.vue/ABOUTUS.vue"
import pageNotFoundVue from "@/components/routingComponent.vue/pageNotFound.vue"

const routes=[
    {
    name:"HOME",
    path:"/HOME",
    component:HOME
},
{
    name:"LOGIN",
    path:"/LOGIN/:name",
    component:LOGIN
},
{
    name:"ABOUTUS",
    path:"/ABOUTUS",
    component:ABOUTUS
},
{
    name:"notFound",
    path:"/:pathMatch(.*)*",
    component:pageNotFoundVue
}
]
const router=createRouter({
    history:createWebHistory(),
    routes
})
export default router;