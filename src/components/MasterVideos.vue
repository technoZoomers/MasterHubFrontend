<template lang="pug">
div
  div(class="container")
    h1(class="presentation-header header page-text") Presentation
    video(
        src="../assets/test.mp4"
        type="video/mp4"
        class="video-presentation"
        controls
    )
    h1(class="lessons-header header page-text") Lessons
    video(
        src="../assets/test.mp4"
        type="video/mp4"
        class="video-lesson-1"
        controls
    )
    video(
        src="../assets/test.mp4"
        type="video/mp4"
        class="video-lesson-2"
        controls
    )
    div(class="presentation-title video-title centered-flex") I'm flutist Reya Fountain
    div(class="presentation-date video-date centered-flex") October 3, 2020
    div(class="presentation-theme centered-flex-content") 
        div(class="theme centered-flex-content") music
    div(class="presentation-subtheme centered-flex-content") 
        div(class="subtheme centered-flex-content") flute

    div(class="video1-title video-title centered-flex") Tutorial 1
    div(class="video1-date video-date centered-flex") October 4, 2020
    div(class="video1-theme centered-flex-content") 
        div(class="theme centered-flex-content") music
    div(class="video1-subtheme centered-flex-content") 
        div(class="subtheme centered-flex-content") flute


    div(class="video2-title video-title centered-flex") Tutorial 2
    div(class="video2-date video-date centered-flex") October 5, 2020
    div(class="video2-theme centered-flex-content") 
        div(class="theme centered-flex-content") music
    div(class="video2-subtheme centered-flex-content") 
        div(class="subtheme centered-flex-content") flute

    input(id="presentation-upload" type="file" ref="file" class="inputfile" v-on:change="handleFileUpload()")
    label(for="presentation-upload" class="button button-load-presentation page-text centered-flex-content") Upload presentation

    input(id="lesson-upload" type="file" class="inputfile")
    label(for="lesson-upload" class="button button-load-video page-text centered-flex-content") Upload lesson


</template>

<script>
import {LoadNewInto} from "../api/masters";
export default {
  name: 'MasterVideos',
  props: {
    masterId: Number
  },
  methods: {
      handleFileUpload(){
          this.file = this.$refs.file.files[0];
          console.log(this.file);
          let formData = new FormData();
          formData.append('file', this.file);
          LoadNewInto(formData);
      }
    }
}
</script>


<style scoped>
.inputfile {
  /* visibility: hidden etc. wont work */
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
}

.container {
  display: grid;
  grid-template-columns: 5% 22% 8% 10% 22% 8% 8% 17%;
  grid-template-rows: 10% 22% 6% 4% 8% 10% 22% 6% 4% 8%;
  /* 
  height: 800px;
  width: 1100px;
  */
  height: 100%;
  width: 100%;
}

.page-text {
  font-family: "Maven Pro";
}

.header {
  text-align: left;
}

.presentation-header {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
}

.lessons-header {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 6;
  grid-row-end: 7;
}

.video-presentation {
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;
  height: 100%;
  width: 100%;
}

.video-lesson-1 {
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 7;
  grid-row-end: 8;
  height: 100%;
  width: 100%;
}

.video-lesson-2 {
  grid-column-start: 5;
  grid-column-end: 7;
  grid-row-start: 7;
  grid-row-end: 8;
  height: 100%;
  width: 100%;
}

.button {
  background-color: #FF736A;
  border: none;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 20px;
  white-space: normal;
}

.button-load-presentation {
  grid-column-start: 8;
  grid-column-end: 9;
  grid-row-start: 2;
  grid-row-end: 3;
  height: 30%;
  width: 60%;
}

.button-load-video {
  grid-column-start: 8;
  grid-column-end: 9;
  grid-row-start: 7;
  grid-row-end: 8;
  height: 30%;
  width: 60%;
}

.presentation-title {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 3;
  grid-row-end: 4;
  text-align: left;
}

.presentation-date {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 4;
  grid-row-end: 5;
  text-align: left;
}

.presentation-theme {
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 3;
  grid-row-end: 4;
}

.presentation-subtheme {
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 4;
  grid-row-end: 5;
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

.video-title {
  font-size: 22px;
}

.video-date {
  font-size: 15px;
}

.video1-title {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 8;
  grid-row-end: 9;
  text-align: left;
}

.video1-date {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 9;
  grid-row-end: 10;
  text-align: left;
}

.video1-theme {
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 8;
  grid-row-end: 9;
}

.video1-subtheme {
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 9;
  grid-row-end: 10;
}

.video2-title {
  grid-column-start: 5;
  grid-column-end: 6;
  grid-row-start: 8;
  grid-row-end: 9;
  text-align: left;
}

.video2-date {
  grid-column-start: 5;
  grid-column-end: 6;
  grid-row-start: 9;
  grid-row-end: 10;
  text-align: left;
}

.video2-theme {
  grid-column-start: 6;
  grid-column-end: 7;
  grid-row-start: 8;
  grid-row-end: 9;
}

.video2-subtheme {
  grid-column-start: 6;
  grid-column-end: 7;
  grid-row-start: 9;
  grid-row-end: 10;
}

.theme{
    background-color: #FFDAAE;
    height: 30px;
    width: 100%;
    border-radius: 20px;
}

.subtheme {
    background-color: #FF736A;
    height: 30px;
    width: 100%;
    border-radius: 20px;
}
</style>
