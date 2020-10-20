<template lang="pug">
img.down-button(src="../../assets/pics/down-arrow.svg" @click="clickMethod")
</template>

<script>
export default {
  name: "DownButton",
  methods: {
    clickMethod() {
      document.getElementById("popularLessons").scrollIntoView({behavior: 'smooth' });
    }
  } 
}
</script>

<style>
.down-button {
  bottom: calc(0.3vh + 7px);
  height: calc(2.5vh + 15px);
}
</style>
