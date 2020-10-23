<template lang="pug">
  div.review_pic
    img.review_pic__img(src = '../../../../../../../assets/pics/reviewTittle.jpg')
</template>

<script>
export default {
name: "ReviewsTittle"
}
</script>

<style scoped>
.review_pic__img {
  width: 40%;
}
.review_pic__img{
  border-radius: 10px;
  box-shadow: 0 0 10px #f69d3c;
  align-self:center;
}
.review_pic {
  display: flex;
  justify-content: center;
}
</style>