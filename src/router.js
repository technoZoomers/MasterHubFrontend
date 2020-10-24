import Vue from 'vue'
import VueRouter from  'vue-router'
import Settings from "@/components/Body/Main/MasterAccount/Content/Pages/Settings";
import MasterVideosContainer from "@/components/MasterVideos/MasterVideosContainer";
import ChatList from "@/components/Body/Main/MasterAccount/Content/Pages/ChatComponents/ChatList";
import Schedule from "@/components/Body/Main/MasterAccount/Content/Pages/Schedule"; 
import Reviews from "@/components/Body/Main/MasterAccount/Content/Pages/Reviews/Reviews";
import Dialog from "@/components/Body/Main/MasterAccount/Content/Pages/ChatComponents/Dialog";
import StartPage from "@/components/Body/Main/StartPage/StartPage";
import PersonalAccount from "@/components/Body/Main/MasterAccount/PersonalAccount.vue";
import SearchMaster from "@/components/Body/Main/Search/SearchMaster";

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
                name: "MasterVideosContainer",
                components:{
                    account:MasterVideosContainer
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
                name: "ChatList",
                components:{
                    account:ChatList
                },
            },
            {
                path: "/account/dialog/",
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
