<template lang="pug">
  div.menu
    div.menu_setting
      router-link(to="/account/settings") Settings
    div.menu_video
      router-link(to="/account/lessons") Video Lessons
    div.menu_chats
      router-link(to="/account/chats") Chats
    div.menu_lessons
      router-link(to="/account/schedule") Lessons schedule
    div.menu_reviews
      router-link(to="/account/reviews") Reviews
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
a {
  text-decoration: none;
  color: #FF736A;
}
a:visited{
  color: #FF736A;
}
a:active {
  color: #FFDAAE; /* Цвет активных ссылок */
}
.menu{
  width: 10%;
  font-style: normal;
  font-family: Maven Pro;
  font-weight: 100;
  font-size: 15px;
  font-variant: small-caps;
}

</style>