<template lang="pug">
  div.content
    router-view(name="account")
</template>


<script>
import MasterVideos from "@/components/Body/Main/MasterAccount/Content/Pages/MasterVideos";

export default {
  name: "Content",
  components: {MasterVideos}
}
</script>

<style scoped>

.content{
  width: 77%;
  height: 100%;
  display: flex;
}

</style>