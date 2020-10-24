<template lang="pug">
  div(id="app")
    Main
</template>

<script>
import Main from "@/components/Body/Main/Main";
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

  --hover-color: #FFDAAE;
  --red-color: #FF736A;
  --red-color-hover: #b9615c; 
  --project-font: "Maven Pro";
  --down-button-color: #efeff5;
  --image-text-color: white;
  --chat-color: rgba(255, 222, 213, 0.3);
  --chat-color-intensive: rgba(255, 222, 213, 0.7);
}
</style>
