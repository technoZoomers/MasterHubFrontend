<template lang="pug">
div.container-videos
  div.flex-child(v-for="video in videos")
    popular-video(:title="video.title", :author="video.name", :tag_1="video.theme", :tag_2="video.subtheme", :source="video.video")
</template>

<script>
import PopularVideo from "@/components/PopularVideo";
export default {
  name: "PopularVideoContainer",
  components: {PopularVideo},
  data() {
      return {
      videos: [
          {
          'rat': '5.0',
          'name': 'Steve Wosniak',
          'title': 'Video Title',
          'theme': 'Music',
          'subtheme': 'Gitar',
          'video': require('../assets/test.webm'),
          },
          {
          'rat': '5.0',
          'name': 'Steve Wosniak',
          'title': 'Video Title',
          'theme': 'Music',
          'subtheme': 'Gitar',
          'video': require('../assets/test.webm'),
          },
          {
          'rat': '5.0',
          'name': 'Steve Wosniak',
          'title': 'Video Title',
          'theme': 'Music',
          'subtheme': 'Gitar',
          'video': require('../assets/test.webm'),
          },
          {
          'rat': '5.0',
          'name': 'Steve Wosniak',
          'title': 'Video Title',
          'theme': 'Music',
          'subtheme': 'Gitar',
          'video': require('../assets/test.webm'),
          },
                    {
          'rat': '5.0',
          'name': 'Steve Wosniak',
          'title': 'Video Title',
          'theme': 'Music',
          'subtheme': 'Gitar',
          'video': require('../assets/test.webm'),
          },
          {
          'rat': '5.0',
          'name': 'Steve Wosniak',
          'title': 'Video Title',
          'theme': 'Music',
          'subtheme': 'Gitar',
          'video': require('../assets/test.webm'),
          },
          {
          'rat': '5.0',
          'name': 'Steve Wosniak',
          'title': 'Video Title',
          'theme': 'Music',
          'subtheme': 'Gitar',
          'video': require('../assets/test.webm'),
          },
          {
          'rat': '5.0',
          'name': 'Steve Wosniak',
          'title': 'Video Title',
          'theme': 'Music',
          'subtheme': 'Gitar',
          'video': require('../assets/test.webm'),
          },
          {
          'rat': '5.0',
          'name': 'Steve Wosniak',
          'title': 'Video Title',
          'theme': 'Music',
          'subtheme': 'Gitar',
          'video': require('../assets/test.webm'),
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
