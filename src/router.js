import Vue from 'vue'
import VueRouter from  'vue-router'
import Settings from "@/components/Settings";
import MasterVideos from "@/components/MasterVideos";
import Chats from "@/components/Chats";
import Schedule from "@/components/Schedule";
import Reviews from "@/components/Reviews";

Vue.use(VueRouter);
const routes = [
    {
        path: "/account/settings",
        name: "Settings",
        component: Settings
    },
    {
        path: "/account/lessons",
        name: "Lessons",
        component: MasterVideos
    },
    {
        path: "/account/chats",
        name: "Lessons",
        component: Chats
    },
    {
        path: "/account/schedule",
        name: "Lessons",
        component: Schedule
    },
    {
        path: "/account/reviews",
        name: "Lessons",
        component: Reviews
    },

];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router
