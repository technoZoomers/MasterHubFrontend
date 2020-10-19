<template lang="pug">
img.down-button(src="../../assets/pics/down-arrow.svg")
</template>

<script>
export default {
  name: "DownButton",
}
</script>

<style>
.down-button {
  bottom: calc(0.3vh + 7px);
  height: calc(2.5vh + 15px);
  padding: 3vh;
}
</style>
