<template lang="pug">
div.container
  img.main-image(src="../assets/pics/main page.webp")
  div.centered-flex.text
    div.main-header Find your master
  div.centered-flex.text
    SearchField
  div.centered-flex.down-button
    DownButton
  div.centered-flex.text
    div.main-header Popular lessons
  div.centered-flex
    PopularVideoContainer
</template>

<script>
import PopularVideoContainer from "@/components/PopularVideoContainer";
import DownButton from "@/components/Buttons/DownButton";
import SearchField from "@/components/SearchField";

export default {
name: "StartPage",
components: {PopularVideoContainer, DownButton, SearchField},
}
</script>

<style scoped>
.down-button {
  padding: 10vh;
}

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
  font-size: calc(3vh + 20px);
  padding: 2vh;
}
.main-image {
  object-fit: cover;
  height: calc(50vh + 60px);
}

.search {
  height: calc(15vh + 30px);
}
</style>