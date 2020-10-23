<template lang="pug">
  div.searchPlace_column
    div.searchPlace
      SearchField
      SearchParametrs
    SearchFilters
</template>

<script>
import SearchParametrs from "@/components/Body/Main/Search/Place/Filters/SearchParametrs";
import SearchField from "@/components/Body/Main/Search/Place/Filters/SearchField";
import SearchFilters from "@/components/Body/Main/Search/Place/Filters/SearchFilters";

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