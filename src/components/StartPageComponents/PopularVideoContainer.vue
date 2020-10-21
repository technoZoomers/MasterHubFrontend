<template lang="pug">
div.container-videos
  div.flex-child(v-for="video in videos")
    popular-video(:title="video.title", :author="video.name", :tag_1="video.theme", :tag_2="video.subtheme", :source="video.video")
</template>

<script>
import PopularVideo from "@/components/StartPageComponents/PopularVideo";
export default {
  name: "PopularVideoContainer",
  components: {PopularVideo},
  data() {
      return {
      videos: [
          {
          'name': 'Master 1',
          'title': 'noname',
          'theme': 'music',
          'subtheme': 'gitar',
          'video': require('../../assets/videos/2.webm'),
          },
          {
          'name': 'Master 2',
          'title': 'noname',
          'theme': 'cooking',
          'subtheme': 'workshop',
          'video': require('../../assets/videos/3.webm'),
          },
          {
          'name': 'Master 3',
          'title': 'noname',
          'theme': 'media',
          'subtheme': 'noname',
          'video': require('../../assets/videos/4.webm'),
          },
          {
          'name': 'Master 4',
          'title': 'noname',
          'theme': 'sports',
          'subtheme': 'noname',
          'video': require('../../assets/videos/5.webm'),
          },
          {
          'name': 'Master 5',
          'title': 'noname',
          'theme': 'photo',
          'subtheme': 'noname',
          'video': require('../../assets/videos/6.webm'),
          },
          {
          'name': 'Master 6',
          'title': 'noname',
          'theme': 'cooking',
          'subtheme': 'null',
          'video': require('../../assets/videos/7.webm'),
          },
          {
          'name': 'Master 7',
          'title': 'noname',
          'theme': 'music',
          'subtheme': 'null',
          'video': require('../../assets/videos/8.webm'),
          },
          {
          'name': 'Master 8',
          'title': 'noname',
          'theme': 'music',
          'subtheme': 'null',
          'video': require('../../assets/videos/2.webm'),
          },
          {
          'name': 'Master 9',
          'title': 'noname',
          'theme': 'music',
          'subtheme': 'null',
          'video': require('../../assets/videos/3.webm'),
          },     
        ]
      }
  }, 
}
</script>

<style>
.container-videos {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 90% ;
}

.flex-child {
  flex: 1 0 30%;
  margin-right: calc(10px + 1vw);
  margin-bottom: calc(10px + 1vh);
  height: calc(50px + 25vh);
  width: calc(50px + 10vw);
}
</style>
