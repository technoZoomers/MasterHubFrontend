<template lang="pug">
  div.search
    SearchPlace
    SearchResult
</template>

<script>
import SearchPlace from "@/components/SearchPlace";
import SearchResult from "@/components/SearchResult";

export default {
  name: "SearchComponent",
  components:{SearchPlace,SearchResult }
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