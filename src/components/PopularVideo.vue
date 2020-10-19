<template lang="pug">
  div.grid-container
    div.video-element
      video.popular-video(
        :src="`${source}`"
        type="video/webm"
        ref="video"
        controls
      )
    div.video-title {{ title }}
    div.video-author
      div.author-text {{ author }}
    div.video-tag-1
      theme-button(:text="`${tag_1}`")
    div.video-tag-2
      subtheme-button(:text="`${tag_2}`")
</template>

<script>
import ThemeButton from "@/components/Buttons/ThemeButton";
import SubthemeButton from "@/components/Buttons/SubthemeButton";

export default {
  name: "PopularVideo",
  components: {ThemeButton, SubthemeButton},
  props: {
    title: String,
    author: String,
    tag_1: String,
    tag_2: String,
    source: String,
 },
  mounted() {
    this.$refs.video.src = this.$props.source;  
  }
}
</script>

<style scoped>

.grid-container { 
  display: grid;
  grid-template-rows: 70% 17.5% 12.5%;
  grid-template-columns: 80% 20%;
  height: 100%;
  width: 100%;
}

.video-element {
  grid-row-start: 1;
  grid-row-end: 2;
  grid-column-start: 1;
  grid-column-end: 3;

  width: 100%;
  height: 100%;
}

.video-title {
  grid-row: 2;
  grid-column: 1;
  font-size: calc(1vh + 15px);
  padding: 1vh;
}

.video-author {
  grid-row: 3;
  grid-column: 1;
  padding-left: 1vh;
  padding-right: 1vh;
}

.author-text {
  width: fit-content;
  border-style: solid;
  border-width: 1px;
  border-radius: 20px;
  padding: 0.5vh;
}
.video-tag-1 {
  grid-row: 2;
  grid-column: 2;
  padding: 1vh;
}

.video-tag-2 {
  grid-row: 3;
  grid-column: 2;
  padding-left: 1vh;
  padding-right: 1vh;
}

.popular-video {
  height: 100%;
  width: 100%;
}

</style>