<template lang="pug">
  div.header
    Title
    UserWindow
</template>

<script>
import UserWindow from "@/components/UserWindow";
import Title from "@/components/Title";
export default {
  name: "Header",
  components: {Title, UserWindow}
}
</script>

<style scoped>
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 5px 0 5px;
  height: 5vh;
  min-height: fit-content;

}
</style>