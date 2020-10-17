import Vue from 'vue'
import VueRouter from  'vue-router'
import Settings from "@/components/Settings";
import MasterVideos from "@/components/MasterVideos";
import Chats from "@/components/Chats";
import Schedule from "@/components/Schedule";
import Reviews from "@/components/Reviews";
import Dialog from "@/components/Dialog";
import StartPage from "@/components/StartPage";
import PersonalAccount from "@/components/PersonalAccount";
import SearchMaster from "@/components/SearchMaster";

Vue.use(VueRouter);
const routes = [
    {
        path: "/",
        name: "StartPage",
        components:{
            main:StartPage
        }
    },
    {
        path: "/searchMaster",
        name: "searchMaster",
        components:{
            main:SearchMaster
        }
    },
    {
        path: "/account",
        name: "PersonalAccount",
        components:{
            main:PersonalAccount
        },
        children: [
            {
                path: '/account/settings',
                name: "Settings",
                components:{
                    account:Settings
                }
            },
            {
                path: '/account/lessons',
                name: "MasterVideos",
                components:{
                    account:MasterVideos
                }
            },
            {
                path: '/account/schedule',
                name: "Schedule",
                components:{
                    account:Schedule
                }
            },
            {
                path: '/account/reviews',
                name: "Reviews",
                components:{
                    account:Reviews
                }
            },
            {
                path: "/account/chats",
                name: "Chats",
                components:{
                    account:Chats
                }
            },
            {
                path: "/dialog/:id",
                name: "Dialog",
                components:{
                    account:Dialog
                }
            },
        ]
    },
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router
