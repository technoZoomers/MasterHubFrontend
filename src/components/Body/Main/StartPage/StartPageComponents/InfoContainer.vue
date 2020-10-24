<template lang="pug">
  div.info-container
    div.info-child
      MasterInfo
    div.info-child
      StudentInfo
</template>

<script>
import MasterInfo from "@/components/Body/Main/StartPage/StartPageComponents/MasterInfo"
import StudentInfo from "@/components/Body/Main/StartPage/StartPageComponents/StudentInfo"

export default {
  name: "InfoContainer",
  components: {MasterInfo, StudentInfo}
}
</script>

<style>
.info-container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 80%;
  padding-top: calc(3vh + 25px);
  padding-bottom: calc(5vh + 25px);
}

.info-child {
  flex: 1 0 40%;
  flex-direction: row;
  margin-right: calc(10px + 1vw);
  margin-bottom: calc(10px + 1vh);
}
</style>
