<template lang="pug">
  div.popular
    div.popular_items(v-for="item in items")
      div.item(@click="selectedItem") {{item}}

</template>

<script>
import {GetSearch} from "@/api/search";

export default {
  name: "SearchParametrs",
  data() {
    return {
      items: ["Languages", "Sports", "Music", "Auto", "Cooking", "Dancing", "Science", "IT", "Design","Art"]
    }
  },
  methods:{
    selectedItem(e){
      this.$store.commit('setTheme', e.target.innerHTML)
      try {
        GetSearch(e.target.innerHTML).then(
            res=>{
              this.$store.commit('setSearchRes', res.data)
            }
        )
      } catch (err) {
        console.log(err);
      }
      document.querySelector('.parameters').style.visibility='visible'
    }
  }
}
</script>

<style scoped>
.popular_items{
  display: flex;
  flex-direction: row;
}
.item{
  margin: 10px;
}
.item:hover{
  color: #ff736a;
}
.popular{
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
}
.popular::-webkit-scrollbar {
  display: none;
}
</style>