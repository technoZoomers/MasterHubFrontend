<template lang="pug">
  div.main
    Header
    Body
</template>

<script>
import Header from "./Header";
import Body from "./Body";
export default {
  name: "Main",
  components: {
    Header,Body
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}
</style>
