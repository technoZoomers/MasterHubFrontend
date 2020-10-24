<template lang="pug">
div.main-flex-master-videos
  div.header Lessons
  div.container-master-videos 
    div.flex-child-master-video(v-for="(video, index) in videosInfoArray")
      master-video(:id="video.id", :master_id="video.master_id", :name="video.name", :subtheme="video.theme.subtheme", :theme="video.theme.theme", :date="video.uploaded", :video_ref="index")
  input.inputfile(id="lesson-upload" type="file")
  label(for="lesson-upload" class="button button-load-video page-text centered-flex-content") Upload lesson
</template>

<script>
import {LoadNewVideo, GetMasterVideosInfo} from "../../api/masters";
import ThemeButton from "@/components/Buttons/ThemeButton";
import SubthemeButton from "@/components/Buttons/SubthemeButton";
import MasterVideo from "@/components/MasterVideos/MasterVideo";

export default {
  name: 'MasterVideosContainer',
  props: {
    masterId: Number
  },
  components: {ThemeButton, SubthemeButton, MasterVideo},
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
  },
  async mounted() {
    try {
      const responseVideoInfo = await GetMasterVideosInfo(this.userID);
      this.videosInfoArray = responseVideoInfo.data;
    } catch (err) {
      this.error = err;
      console.log(err);
    }
  },
}
</script>


<style scoped>
.main-flex-master-videos {
  display: flex;
  flex-direction: column;
}

.container-master-videos {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 90% ;
}

.flex-child-master-video {
  flex: 1 0 30%;
  margin-right: calc(10px + 1vw);
  margin-bottom: calc(10px + 1vh);
  height: calc(50px + 25vh);
  width: calc(50px + 10vw);
}

.inputfile {
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
}

.header {
  text-align: left;
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
  height: 10%;
  width: 70%;
}
</style>
