<template lang="pug">
  div.title
    div.text
      router-link(to="/" style="color: black") MasterHub
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