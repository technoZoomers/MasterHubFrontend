<template lang="pug">
  div.content_settings
    div.settings_tittle Settings
    div.settings
      div.settings_title_small personal setting
      div.personal_settings
        div.personal_pic d
        div.personal_name f
        div.personal_description g
      div.settings_title_small account setting
      div.account_settings
        div.account_lang a
        div.account_qualif c
        div.account_theme b
        div.accountsubtheme v

</template>

<script>
export default {
  name: "Settings"
}
</script>

<style scoped>
.settings_title_small{
  font-style: normal;
  font-family: Maven Pro;
  font-weight: 100;
  font-size: 15px;
  line-height: 49px;
  font-variant: small-caps;
}
.content_settings{
  display: flex;
  flex-direction: column;
}
.settings_tittle{
  font-style: normal;
  font-family: Maven Pro;
  font-weight: 100;
  font-size: 25px;
  line-height: 49px;
  font-variant: small-caps;
}
.account_settings{
  display: flex;
  flex-direction: column;
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
  height: 50%;
}
</style>