<template lang="pug">
  div(id="app")
    Main
</template>

<script>
import Main from "@/components/Main";
export default {
  name: "App",
  components: {Main}
}
</script>

<style>
#app {
  height: 100%;
  padding:0;
  display: flex;
}
</style>
