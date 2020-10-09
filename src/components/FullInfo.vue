<template lang="pug">
  div.hiddenInfo
    div.pic
      img.user__img.user__img_style(src = '../assets/pics/user.jpg' @click="show = !show")
    div.content
      div.text
        div.text_inside_text
          a.user__name_style Super Master
        div.text_inside_text
          a.user__name_style username
        div.text_inside_text
          a.user__name_style type master
        div.text_inside_text
          a.user__name_style amount of students
        div.text_inside_text
          a.user__name_style prime activity music
      div.settings
        a.user__name_style
          router-link(to="/account/settings") settings
      div.exit
        a.user__name_style exit

</template>

<script>
export default {
name: "FullInfo"
}
</script>

<style scoped>
.content{
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
.hiddenInfo{
  margin: 5px;
  display: flex;
  flex-direction: column;
  padding: 5px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
}
.user__img {
  width: 60px;
}
.user__img_style{
  border-radius: 100%;
  border: 1px solid rgba(0, 0, 0, 0.5);
  align-self:center;
}
.pic {
  display: flex;
  justify-content: center;
}
.text_inside_text{
  display: flex;
  justify-content: center;
}
.text{
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.settings{
  display: flex;
  justify-content: center;
}
.exit{
  display: flex;
  justify-content: center;
}
.user__name_style{
  align-self:center;
  color: #444444;
  font-style: normal;
  font-family: Maven Pro;
  font-variant: small-caps;
  font-size: 16px;
  margin-top: 2px;
}
</style>