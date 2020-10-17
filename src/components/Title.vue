<template lang="pug">
  div.title
    div.text MasterHub
    div.find
      router-link(to="/searchMaster") find your Master
</template>

<script>
export default {
  name: "Title"
}
</script>

<style scoped>
.title{
  display: flex;
  flex-direction: column;
}
.text{
  font-style: normal;
  font-family: Maven Pro;
  font-weight: 100;
  font-size: 25px;
  font-variant: small-caps;
}
.find{
  font-style: normal;
  font-family: Maven Pro;
}
a {
  text-decoration: none;
  color: #f69d3c;
}
a:visited{
  color: #f69d3c;
}
a:active {
  color: #FFDAAE; /* Цвет активных ссылок */
}

</style>