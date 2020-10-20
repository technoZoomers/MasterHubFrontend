<template lang="pug">
div.language-flex
  div.language-text select language
  div.language-button english
</template>

<script>
export default {
  name: "SelectLanguage",
}
</script>

<style>

.language-flex {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: calc(1vh + 10px);
}

.language-text {
  font-size: calc(1vh + 10px);
  padding: 10px;  
}

.language-button {
  font-size: calc(1vh + 10px);
  width: fit-content;
  border-style: solid;
  border-width: 1px;
  border-radius: 20px;
  padding: 5px;
}
</style>
