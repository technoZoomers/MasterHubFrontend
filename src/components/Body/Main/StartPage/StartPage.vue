<template lang="pug">
div.container
  img.main-image(src="../../../../assets/pics/main page.webp")
  div.centered-flex.image-text Find tutor and community for your interest
  div.centered-flex.text
    router-link(to="/searchMaster" tag="div" class="seach-button") Search master
  div.centered-flex.down-button
    DownButton
  div.centered-flex.text(id="popularLessons")
    div.main-header Popular lessons
  div.centered-flex
    PopularVideosContainer
  div.centered-flex
    InfoContainer
  div.revert-flex
    SelectLanguage
    ContactUs
    
</template>

<script>
import PopularVideosContainer from "@/components/Body/Main/StartPage/StartPageComponents/PopularVideosContainer";
import DownButton from "@/components/Buttons/DownButton";
import InfoContainer from "@/components/Body/Main/StartPage/StartPageComponents/InfoContainer";
import ContactUs from "@/components/Body/Main/StartPage/StartPageComponents/ContactUs";
import SelectLanguage from "@/components/Body/Main/StartPage/StartPageComponents/SelectLanguage";

export default {
name: "StartPage",
components: {PopularVideosContainer, DownButton, InfoContainer, ContactUs, SelectLanguage},
}
</script>

<style scoped>
.image-text {
  z-index: 100;
  position: absolute;
  color: var(--image-text-color);
  font-size: calc(3vh + 15px);
  left: calc(6vw + 10px);
  top: calc(30vh + 30px);
}

.down-button {
  padding: 6vh;
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

.seach-button {
  background-color: var(--red-color);
  border-radius: 20px;
  font-size: calc(0.7vh + 15px);
  margin: 2vh;
  padding: 2vh;
  width: fit-content;
}

.seach-button:hover {
  background-color: var(--red-color-hover);
}

.main-header {
  font-size: calc(2vh + 20px);
  padding: 2vh;
}

.main-image {
  object-fit: cover;
  height: calc(60vh + 60px);
}

.search {
  height: calc(15vh + 30px);
}

.revert-flex {
  display: flex;
  flex-direction: row-reverse;
}
</style>