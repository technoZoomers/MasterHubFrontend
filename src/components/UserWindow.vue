<template lang="pug">
  div.user_window
    div.user
      div.text
        a.user__name_style Super Master
        a.user__name_style Master of Music
      img.user__img.user__img_style(src = '../assets/pics/user.jpg' @click="show = !show")
    div.hidden(v-if="show")
      FullInfo
</template>

<script>
import FullInfo from "@/components/FullInfo";
export default {
  name: "UserWindow",
  data() {
    return {
      show: false
    }
  },
  components: {FullInfo},
  methods: {
  }
}
</script>

<style scoped>

.user_window{
  display: inline-grid;
}
.text{
  display: flex;
  flex-direction: column;
  margin: 5px;
}
.user__name_style {
  color: #444444;
  font-style: normal;
  font-family: Maven Pro;
  font-variant: small-caps;
  font-size: 13px;
}
.user{
  float: right;
  display: flex;
  flex-direction: row;
}
.user__img {
  width: 60px;
}
.user__img_style{
  border-radius: 50px;
  border: 1px solid rgba(0, 0, 0, 0.5);
}
</style>