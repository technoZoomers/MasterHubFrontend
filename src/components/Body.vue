<template lang="pug">
  div.body
    router-view(name="main")
</template>

<script>
export default {
  name: "Body",
}
</script>

<style scoped>
.body {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
</style>