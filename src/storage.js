import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        searchRes: [],
        theme: '',
        master:[]
    },
    mutations: {
        setSearchRes (state, res) {
            for (let i = 0; i < res.length; i++) {
                for (let [key, value] of Object.entries(res[i])) {
                    if(key=='theme'){
                        res[i][key]['theme'] = res[i][key]['theme'].toString()
                        res[i][key]['subthemes'] = res[i][key]['subthemes'].toString()
                    }else{
                        res[i][key] = value.toString()
                    }
                }
            }
            state.searchRes = res
        },
        setTheme (state, theme) {
            state.theme = theme
        },
        setMaster (state, master) {
            state.master = master
        },
    }
})
export default store