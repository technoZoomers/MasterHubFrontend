<template lang="pug">
  div.searchPlace_column
    div.searchPlace
      SearchField
      SearchParametrs
    SearchFilters
</template>

<script>
import SearchParametrs from "@/components/SearchParametrs";
import SearchField from "@/components/SearchField";
import SearchFilters from "@/components/SearchFilters";

export default {
name: "SearchPlace",
  components:{SearchParametrs,SearchField, SearchFilters}
}
</script>

<style scoped>
.searchPlace_column{
  display: flex;
  flex-direction: column;
}
.searchPlace{
  display: flex;
  flex-direction: row;
}
</style>