<template lang="pug">
  div.menu
    div.menu_setting Settings
    div.menu_video Video Lessons
    div.menu_chats Chats
    div.menu_lessons Lessons schedule
    div.menu_reviews Reviews
</template>

<script>
export default {
  name: "Menu"
}
</script>

<style scoped>
.menu_setting, .menu_video, .menu_chats, .menu_lessons, .menu_reviews{
  margin: 5px;
}

.menu{
  width: 20%;
  font-style: normal;
  font-family: Maven Pro;
  font-weight: 100;
  font-size: 15px;
  font-variant: small-caps;
}

</style>