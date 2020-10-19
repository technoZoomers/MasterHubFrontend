<template lang="pug">
div.container
  img.main-image(src="../assets/pics/main page.webp")
  div.centered-flex.text
    div.main-header Найди своего мастера
  div.centered-flex.text
    div.search / Виджет поиска /
  div.centered-flex
    DownButton
  div.centered-flex.text
    div.main-header Популярные уроки
  div.centered-flex
    PopularVideoContainer
</template>

<script>
import PopularVideoContainer from "@/components/PopularVideoContainer";
import DownButton from "@/components/Buttons/DownButton";

export default {
name: "StartPage",
components: {PopularVideoContainer, DownButton},
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.centered-flex {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.main-header {
  font-size: calc(2vh + 20px);
  padding: 2vh;
}
.main-image {
  object-fit: cover;
  height: calc(45vh + 60px);
}

.search {
  height: calc(15vh + 30px);
  background-color: var(--hover-color);
}
</style>