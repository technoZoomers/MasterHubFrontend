<template lang="pug">
  div.account
    Menu
    Content
</template>

<script>
import Menu from "@/components/Body/Main/MasterAccount/Menu/Menu";
import Content from "@/components/Body/Main/MasterAccount/Content/Content";
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