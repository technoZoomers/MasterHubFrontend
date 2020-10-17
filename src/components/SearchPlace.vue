<template lang="pug">
  div.searchPlace
    SearchField
    SearchParametrs
</template>

<script>
import SearchParametrs from "@/components/SearchParametrs";
import SearchField from "@/components/SearchField";

export default {
name: "SearchPlace",
  components:{SearchParametrs,SearchField}
}
</script>

<style scoped>
.searchPlace{
  display: flex;
  flex-direction: row;
}
</style>