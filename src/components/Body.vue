<template lang="pug">
  div.body
    PersonalAccount
</template>

<script>
import PersonalAccount from "@/components/PersonalAccount";
export default {
  name: "Body",
  components: {PersonalAccount},
}
</script>

<style scoped>
.body {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 40px;
  height: 80%;
}
</style>