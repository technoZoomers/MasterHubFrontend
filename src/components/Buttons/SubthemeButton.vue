<template lang="pug">
div(class="centered-flex-content") 
    div(class="subtheme-tag centered-flex-content") {{text}}
</template>

<script>
export default {
  name: "SubthemeButton",
  props: {
    text: String,
 },
}
</script>

<style>
.subtheme-tag {
  background-color: var(--red-color);
  height: 30px;
  width: 100%;
  border-radius: 20px;
}

.centered-flex {
  display: flex;
  align-items: center;
}

.centered-flex-content {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
