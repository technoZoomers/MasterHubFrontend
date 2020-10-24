<template lang="pug">
div.video-grid-container
  div.video-lesson
    video.master-video(
      src=""
      type="video/webm"
      :id="`${video_ref}`"
      controls
    )
  div.video-title.centered-flex {{ name }}
  div.video-date.video-date.centered-flex {{ date }}
  div.video-theme
    theme-button(:text="`music`")
  div.video-subtheme
    subtheme-button(:text="`flute`")
</template>

<script>
import ThemeButton from "@/components/Buttons/ThemeButton";
import SubthemeButton from "@/components/Buttons/SubthemeButton";
import {GetVideoById} from "../../api/masters";
export default {
  name: "MasterVideo",
  components: {SubthemeButton, ThemeButton},
  props: {
    id: Number,
    master_id: Number,
    name: String,
    subtheme: String,
    theme: String,
    date: String,
    video_ref: Number,
 },
   data: () => {
    return {
      videoRef: undefined,
    }
  },
 async mounted() {

  const response = await GetVideoById(this.master_id, this.id);
  const blobVideo = response.data;
  const videoUrl = window.URL.createObjectURL(blobVideo);
  document.getElementById(this.video_ref).src = videoUrl;

 }
}
</script>

<style>
.master-video {
  height: 100%;
  width: 100%;
}

.video-grid-container {
  display: grid;
  grid-template-columns: 80% 20%;
  grid-template-rows: 80% 12% 10%;
  height: 100%;
  width: 100%;
}

.video-lesson {
  grid-row-start: 1;
  grid-row-end: 2;
  grid-column-start: 1;
  grid-column-end: 3;
  width: 100%;
  height: 100%;
}

.video-title {
  grid-column: 1;
  grid-row: 2;
  text-align: left;
  font-size: 22px;
}

.video-date {
  grid-column: 1;
  grid-row: 3;
  text-align: left;
  font-size: 15px;
}

.video-theme {
  grid-column: 2;
  grid-row: 2;    
}

.video-subtheme {
  grid-column: 2;
  grid-row: 3;
}

</style>
