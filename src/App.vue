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

  --hover-color: rgba(255, 218, 174, 1);
  --red-color: #FF736A; 
  --project-font: "Maven Pro";
}
</style>
