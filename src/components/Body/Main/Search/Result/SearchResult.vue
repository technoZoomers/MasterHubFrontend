<template lang="pug">
  div.search_res
    div.master_blocks_loop(v-for="item in items")
      div.image_rating_button
        div.img
          img.pic__img(src = '../../../../../assets/pics/user.jpg')
        div.rat 5.0 ⭐
        div.choose
          input.choose_btn(type='submit' value="assign")
      div.name_info
        div.name  {{item.fullname}}
        div.lang
          div.help language of teaching:
          div.lang_style {{item.language}}
        div.theme
          div.help teaches:
          div.lang_style {{item.theme.theme}}
        div.subtheme
          div.help specific:
          div.lang_style {{item.theme.subthemes}}
        div.subtheme
          div.help qualification:
          div.lang_style {{item.qualification}}
        div.subtheme
          div.help lesson format:
          div.lang_style {{item.educationFormat}}
      div.video
        div.title_video welcome video
        div.video_source
          video.video_source_video(
            src='../../../../../assets/test.mp4'
            type="video/webm"
            controls
          )


</template>

<script>
export default {
  name: "SearchResult",
  computed:{
    items(){
      return this.$store.state.searchRes
    }
  },
}
</script>

<style scoped>
.video_source_video{
  width: 100%;
  height: 100%;
  border-radius: 10px;
}
.video_source{
  display: flex;
  justify-content: center;
  padding: 5px;
}
.title_video{
  text-align: center;
  font-style: normal;
  font-family: Maven Pro;
  font-size: 23px;
  font-weight: 400;
  font-variant: small-caps;
  color: #6b6b6b;

}
.video{
  width: 50%;
  display: flex;
  flex-direction: column;
  margin: 5px;
  padding: 3px;
  min-width: 300px;
}
.help{
  margin-right: 10px;
  margin-top: 5px;
  font-style: normal;
  font-family: Maven Pro;
  font-size: 15px;
  font-weight: 400;
  font-variant: small-caps;
  color: #6b6b6b;
}
.lang_style{
  font-style: normal;
  font-family: Maven Pro;
  font-size: 20px;
  font-weight: bold;
  font-variant: small-caps;
  color: #ff736a;
}
.name{
  font-style: normal;
  font-family: Maven Pro;
  font-size: 23px;
  font-weight: 400;
  font-variant: small-caps;
}
.lang, .theme, .subtheme{
  display: flex;
  flex-direction: row;
}
.name, .lang, .theme, .subtheme{
  margin: 5px;
  padding: 5px;
}
.name_info{
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 5px;
}
.choose_btn{
  background-color: #FF736A;
  border: none;
  color: white;
  font-size:17px;
  border-radius:3px;
  padding: 5px 10px 5px 10px;
}
.choose{
  margin-top: 70%;
  display: flex;
  justify-content: center;
}
.rat{
  display: flex;
  justify-content: center;
  color: #f69d3c;
  margin: 5px;
}
.img{
  display: flex;
  justify-content: center;
}
.pic__img{
  width: 100%;
  border-radius: 100%;
}
.image_rating_button{
  width: 10%;
  display: flex;
  flex-direction: column;
  margin: 5px;
  padding: 3px;
  height: 100%;
  min-width: 100px;
}
.name_info{
  width: 30%;
  display: flex;
  flex-direction: column;
  margin: 5px;
  padding: 3px;
  min-width: 200px;
}
.master_blocks_loop{
  display: flex;
  margin: 10px;
  padding: 10px;
  flex-direction: row;
  background: white;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
  border-radius: 5px;
  min-height: 50%;
  width: 70%;
  overflow-y: hidden ;
  overflow-x: scroll;
}
.search_res{
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 5px;
  min-height: 100%;
  overflow: scroll;
  align-items: center;
}

.search_res::-webkit-scrollbar, .master_blocks_loop::-webkit-scrollbar {
  display: none;
}
</style>