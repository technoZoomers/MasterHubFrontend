<template lang="pug">
  div.account
    Menu
    Content
</template>

<script>
import Menu from "@/components/Menu";
import Content from "@/components/Content";
export default {
  name: "PersonalAccount",
  components: {Menu, Content}
}
</script>

<style scoped>
.account {
  display: flex;
  flex-direction: row;
  width: 100%;
}
</style>