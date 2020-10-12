<template lang="pug">
  div.content
    router-view
</template>


<script>
import MasterVideos from "@/components/MasterVideos";

export default {
  name: "Content",
  components: {MasterVideos}
}
</script>

<style scoped>

.content{
  width: 80%;
  display: flex;
}

</style>