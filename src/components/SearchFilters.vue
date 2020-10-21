<template lang="pug">
  div.parameters
    select.select_filters
      option(disabled selected value="lang") language
      option(value="ru") ru
      option(value="eng") en
    select.select_filters
      option(disabled selected value="master") qualification
      option(value="professional") professional
      option(value="amateur") self-educated
    select.select_filters
      option(disabled selected value="format") education format
      option(value="online") online
      option(value="offline") live
    div.apply_button
      input.apply_btn(type='submit' value="apply" @click="applyFilters")
</template>

<script>
import {GetSearchFilters} from "@/api/search";

export default {
  name: "SearchFilters",
  methods:{
    applyFilters(){
      let filters = document.querySelectorAll('.select_filters')
      let preferences = {}
      let defaults = ["language","qualification","education format"]
      let i = 0
      filters.forEach((filter)=>{
        if(!defaults.includes(filter.options[filter.selectedIndex].text)){
          preferences[defaults[i]] = filter.options[filter.selectedIndex].text
        }
        i++
      })
      let query = ''
      for (let [k, v] of Object.entries(preferences)) {
        if(k=="education format"){
          query += '&educationFormat='+v.toString()
        }else{
          query += '&' + k.toString()+'='+v.toString()
        }
      }
      try{
        GetSearchFilters(this.$store.state.theme, query).then(res=>{
          this.$store.commit('setSearchRes', res.data)
          console.log("after filters",this.$store.state.searchRes)
        })
      }
      catch (err) {
        console.log(err);
      }
      console.log(query)
    }
  }
}
</script>

<style scoped>

.apply_btn{
  background-color: #FF736A;
  border: none;
  color: white;
  font-size:17px;
  border-radius:3px;
  padding: 5px 10px 5px 10px;
}
.apply_button{
  margin: 10px;
  padding: 5px;
}
.select_filters{
  margin: 10px;
  padding: 5px 15px 5px 15px;
}
.parameters{
  display: flex;
  flex-direction: row;
  visibility: hidden;
  margin: 10px;
  padding: 5px;
  justify-content: center;
  overflow-x: scroll;
}
.parameters::-webkit-scrollbar{
  display: none;
}
</style>