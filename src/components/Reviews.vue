<template lang="pug">
  div.reviews
    ReviewsTittle
    ReviewsBlock
</template>

<script>
import ReviewsBlock from "@/components/ReviewsBlock";
import ReviewsTittle from "@/components/ReviewsTittle";

export default {
  name: "Reviews",
  components: {ReviewsBlock, ReviewsTittle}
}
</script>

<style scoped>
.reviews{
  background: linear-gradient(0.25turn, #ff736a, #ffdaae, #f69d3c);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
  height: 90vh;
  width: 100%;
  padding: 15px;
  display: flex;
  flex-direction: column;
}
</style>