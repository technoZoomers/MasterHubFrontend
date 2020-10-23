<template lang="pug">
  div.search
    SearchPlace
    SearchResult
</template>

<script>
import SearchPlace from "@/components/Body/Main/Search/Place/SearchPlace";
import SearchResult from "@/components/Body/Main/Search/Result/SearchResult";
import {SearchAllMasters} from "@/api/search";

export default {
  name: "SearchComponent",
  components:{SearchPlace,SearchResult },
  beforeCreate: function () {
    try{

      SearchAllMasters().then(res=>{
        this.$store.commit('setSearchRes', res.data)
        console.log("on open page",this.$store.state.searchRes)
      })
    }
    catch (err) {
      console.log(err);
    }
  }
}
</script>

<style scoped>
.search{
  display: flex;
  flex-direction: column;
  margin: 10px;
  height: 100%;
}

</style>