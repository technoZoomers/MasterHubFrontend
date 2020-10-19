<template lang="pug">
div.container
  h1.presentation-header.header.page-text Presentation
  video(
      src=""
      type="video/webm"
      class="video-presentation"
      ref="intro"
      controls
  )
  h1(class="lessons-header header page-text") Lessons
  video(
      src=""
      type="video/webm"
      class="video-lesson-1"
      ref="video1"
      controls
  )
  video(
      src=""
      type="video/webm"
      class="video-lesson-2"
      ref="video2"
      controls
  )
  div.presentation-title.video-title.centered-flex My Intro
  div.presentation-date.video-date.centered-flex October 14, 2020
  div.presentation-theme
    theme-button(:text="`music`")
  div.presentation-subtheme
    subtheme-button(:text="`flute`")

  div.video1-title.video-title.centered-flex(ref="video1_title")
  div.video1-date.video-date.centered-flex(ref="video1_data")
  div.video1-theme
    theme-button(:text="`music`")
  div.video1-subtheme
    subtheme-button(:text="`flute`")

  div.video2-title.video-title.centered-flex(ref="video2_title")
  div.video2-date.video-date.centered-flex(ref="video2_data")
  div.video2-theme
    theme-button(:text="`music`")
  div.video2-subtheme
    subtheme-button(:text="`flute`")

  input.inputfile(id="presentation-upload" type="file" ref="file" @change="handlePresentationUpload()")
  label(for="presentation-upload" class="button button-load-presentation page-text centered-flex-content") Upload presentation

  input.inputfile(id="lesson-upload" type="file")
  label(for="lesson-upload" class="button button-load-video page-text centered-flex-content") Upload lesson
</template>

<script>
import {LoadNewVideo, GetVideoById, GetMasterVideosInfo} from "../api/masters";
import ThemeButton from "@/components/Buttons/ThemeButton";
import SubthemeButton from "@/components/Buttons/SubthemeButton";

export default {
  name: 'MasterVideos',
  props: {
    masterId: Number
  },
  components: {ThemeButton, SubthemeButton},
  data: () => {
    return {
      userID: 1,
      video : undefined,
      videosInfoArray: []
    }
  },
  methods: {
      handlePresentationUpload() {
        this.file = this.$refs.file.files[0];
        const introUrl = window.URL.createObjectURL(this.file);
        this.$refs.intro.src = introUrl;

        let formData = new FormData();
        formData.append('video', this.file);
        try {
          const response = LoadNewVideo(formData, this.userID);
          console.log(response.status);
        } catch (err) {
          //console.log(err);
        }
      }, 
      fillVideoInfo1(data) {
        /*const baseRef = 'video' + index;
        const titleRef = baseRef + '_title';
        const dataRef = baseRef + '_data';
        */
        this.$refs.video1_title.innerHTML = data.name;
        this.$refs.video1_data.innerHTML = new Date(data.uploaded);
      },
      fillVideoInfo2(data) {
        this.$refs.video2_title.innerHTML = data.name;
        this.$refs.video2_data.innerHTML = new Date(data.uploaded);
      },
      loadDataFromResponse1(response) {
      const blobVideo = response.data;
      const videoUrl = window.URL.createObjectURL(blobVideo);
      this.$refs.video1.src = videoUrl;
      },
      loadDataFromResponse2(response) {
      const blobVideo = response.data;
      const videoUrl = window.URL.createObjectURL(blobVideo);
      this.$refs.video2.src = videoUrl;
      }       
  },
  async mounted() {
    try {
      const response = await GetVideoById(this.userID, 1);
      this.loadDataFromResponse1(response);
      
      const response2 = await GetVideoById(this.userID, 2);
      this.loadDataFromResponse2(response2);

      const responseVideoInfo = await GetMasterVideosInfo(this.userID);
      this.videosInfoArray = responseVideoInfo.data;
      this.fillVideoInfo1(this.videosInfoArray[0]);
      this.fillVideoInfo2(this.videosInfoArray[1]); 
    } catch (err) {
      this.error = err;
      console.log(err);
    }
  },
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
  height: calc(70vh + 100px);
  width: calc(70vw + 100px);
}

.page-text {
  font-family: var(--project-font);
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
  outline:none;
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
</style>
