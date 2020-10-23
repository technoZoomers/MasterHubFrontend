<template lang="pug">
  div.content_settings
    div.settings_tittle Settings
    div.settings
      div.settings_title_small personal settings
      div.personal_settings
        div.personal_pic
          img.user__img.user__img_style(src='../assets/pics/user.jpg')
          label.change_photo(for="change_pic") change photo
          input(@change="change_photo" type="file" style="display: none;" id="change_pic")
        div.personal_name
          div.full_name
            div.title_style full name
            textarea.name(rows="1" cols="1" style="width: 80%; max-width: 80%; border:none; resize: none") {{master.fullname}}
          div.username
            div.title_style username
            textarea.name(rows="1" cols="1" style="width: 80%; max-width: 80%; border:none; resize: none") {{master.username}}
        div.personal_description
          div.title_style description
          div.description_text
            textarea.textarea_description(rows="10" cols="50" style="width: 80%; max-width: 80%; resize: none;border: 1px solid #FF736A!important;\n" +
            "    border-radius: 10px;") {{ master.description }}
      div.settings_title_small account settings
      div.account_settings
        div.account_set
          div.field your language
          div.input_field
            input.input_field__i(type="text" :value="master.language")
        div.account_set
          div.field your qualification
          div.input_field
            input.input_field__i(type="text" :value="master.qualification")
        div.account_set
          div.field your theme
          div.input_field
            input.input_field__i(type="text" :value="master.theme.theme")
        div.account_set
          div.field your subthemes
          div.input_field
            input.input_field__i(type="text" :value="master.theme.subthemes")
      div.save
        input(type='submit' value="Save" style="background-color: #FF736A; border: none" @click="saveSettings")
</template>

<script>

import {GetMasterInfo, PutMasterInfo} from "@/api/masters";

export default {
  computed:{
    master(){
      return this.$store.state.master
    }
  },
  name: "Settings",
  methods: {
    change_photo(e){
      let pic = document.querySelectorAll('.user__img');
      let file = e.target.files[0];
      let reader = new FileReader();

      reader.onloadend = function () {
        pic[0].src = reader.result;
        pic[1].src = reader.result;
      }
      if (file) {
        reader.readAsDataURL(file);
      } else {
        pic[0].src = '../assets/pics/user.jpg';
        pic[1].src = '../assets/pics/user.jpg';
      }
    },
    saveSettings(){
      let names = document.querySelectorAll(".name")
      let description = document.querySelector(".textarea_description")
      let inputs = document.querySelectorAll(".input_field__i")
      let data = {
        "userId": 2,
        "username": names[1].value,
        "description": description.value,
        "fullName": names[0].value,
        "language": inputs[0].value.split(','),
        "theme": {
          "theme": inputs[2].value,
          "subthemes": [
            inputs[3].value
          ]
        },
        "qualification": inputs[1].value
      }
      console.log("data",data)
      try{
        PutMasterInfo(2, data).then(res=>{
          this.$store.commit('setMaster', res.data)
        })
      }
      catch (err) {
        console.log(err);
      }
    }

  },
  beforeCreate() {
    try{
      GetMasterInfo(2).then(res=>{
        this.$store.commit('setMaster', res.data)
      })
    }
    catch (err) {
      console.log(err);
    }
  }
}
</script>

<style scoped>
.field{
  font-style: normal;
  font-family: Maven Pro;
  font-weight: 100;
  font-size: 15px;
  font-variant: small-caps;
  margin-bottom: 10px;
  width: 20%;
}

input{
  box-sizing: border-box;
  padding: 4px;
  border: 1px solid #FF736A!important;
  border-radius: 10px;
}
.account_set{
  display: flex;
  flex-direction: row;
  margin: 5px;
}

.personal_description{
  margin-left: 5px;
  width: 80%;
}
.name{
  font-style: normal;
  font-family: Maven Pro;
  font-weight: 100;
  font-size: 20px;
  font-variant: small-caps;
}
.title_style{
  font-style: normal;
  font-family: Maven Pro;
  font-weight: 100;
  font-size: 15px;
  font-variant: small-caps;
}
.change_photo{
  font-style: normal;
  font-family: Maven Pro;
  font-weight: 100;
  font-size: 15px;
  font-variant: small-caps;
  align-self: center;
}
.change_photo:hover {
  color: #FF736A;
}
.personal_name{
  width: 20%;
  margin-left: 5px;
  display: flex;
  flex-direction: column;
}
.personal_pic{
  display: flex;
  flex-direction: column;
  width: 20%;
  margin-bottom: 10px;
  margin-right: 5px;
}
.user__img {
  width: 90%;
}
.user__img_style{
  border-radius: 100%;
  border: 2px solid #FF736A!important;
  align-self:flex-start;
}
.settings_title_small{
  font-style: normal;
  font-family: Maven Pro;
  font-weight: 100;
  font-size: 20px;
  font-variant: small-caps;
  margin-bottom: 10px;
}
.content_settings{
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 15px;
}
.settings_tittle{
  font-style: normal;
  font-family: Maven Pro;
  font-weight: 100;
  font-size: 25px;
  line-height: 49px;
  font-variant: small-caps;
}
.personal_settings{
  display: flex;
  flex-direction: row;
}
.settings{
  display: flex;
  flex-direction: column;
}
.account_settings{
  display: flex;
  flex-direction: column;
}
</style>