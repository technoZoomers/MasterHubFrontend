<template lang="pug">
  div.content
    router-view(name="account")
</template>


<script>
import MasterVideosContainer from "@/components/MasterVideos/MasterVideosContainer";

export default {
  name: "Content",
  components: {MasterVideosContainer}
}
</script>

<style scoped>

.content{
  width: 77%;
  height: 100%;
  display: flex;
}

</style>