<template lang="pug">
  div.parameters
    select.select_filters
      option(disabled selected value="lang") language
      option(value="ru") russian
      option(value="eng") english
    select.select_filters
      option(disabled selected value="master") master
      option(value="professional") professional
      option(value="amateur") amateur
    select.select_filters
      option(disabled selected value="format") education format
      option(value="online") online
      option(value="offline") offline
    div.apply_button
      input.apply_btn(type='submit' value="apply" @click="applyFilters")
</template>

<script>
export default {
  name: "SearchFilters",
  methods:{
    applyFilters(){
      let filters = document.querySelectorAll('.select_filters')
      let preferences =[]
      filters.forEach((filter)=>{
        preferences.push(filter.options[filter.selectedIndex].text)
      })
      console.log(preferences)
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