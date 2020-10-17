<template lang="pug">
  div.reviewBody
    div.review(v-for="item in items")
      div.reviewerPic
        img.review_pic__img(:src = "item.pic")
      div.reviewerName {{item.name}}
      div.quotes
        img.quotes__img(src = "../assets/pics/quotes.png")
      div.reviewText {{item.review}}
</template>

<script>
export default {
name: "ReviewsBlock",
data() {
  return {
    items: [
      {
        pic: require('../assets/pics/user.jpg'),
        name: 'Sam',
        review: "cool"
      },
      {
        pic: require('../assets/pics/user.jpg'),
        name: 'Sam',
        review: 'Did a review give you a high star rating but mentioned soDid a review give you a high star rating but mentioned soDid a review give you a high star rating but mentioned some negative experiences in the review response?'
      },
      {
        pic: require('../assets/pics/user.jpg'),
        name: 'Sam',
        review: 'Did a review give you a high star rating but mentioned some negative experiences in the review response? This is a valuable opportunity to show how your business responds to feedback. Thank the customer for their responDid a review give you a high star rating but mentioned soDid a review give you a high star rating but mentioned soDid a review give you a high star rating but mentioned soDid a review give you a high star rating but mentioned sose and explain the steps you are taking to improve. '
      },
      {
        pic: require('../assets/pics/user.jpg'),
        name: 'Sam',
        review: 'Did a review give you a high star rating but mentioned some negative experiences in the review response? This is a valuable opportunity to show how your business responds to feedback. Thank the customer for their response and explain the steps you are taking to improve. '
      },
      {
        pic: require('../assets/pics/user.jpg'),
        name: 'Sam',
        review: 'Did a review give you a high star rating but mentioned some negative experiences in the review response? This is a valuable opportunity to show how your business responds to feedback. Thank the customer for their response and explain the steps you are taking to improve. '
      },
    ],
  }
},
}
</script>

<style scoped>
.reviewText{
  text-align: center;
  margin: 5px;
  color: #6b6b6b;
  font-style: normal;
  font-family: Maven Pro;
  font-weight: 100;
  font-size: 20px;
  font-variant: small-caps;
  overflow-x: scroll;
}
.quotes{
  text-align: center;
}
.quotes__img{
  width: 10%;
}
.reviewerName{
  text-align: center;
  margin: 5px;
  color: #FF736A;
  font-style: normal;
  font-family: Maven Pro;
  font-weight: bold;
  font-size: 20px;
  font-variant: small-caps;
}
.reviewerPic{
  display: flex;
  justify-content: center;
}
.review_pic__img{
  width: 30%;
  border-radius: 100%;
}
.reviewBody{
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  margin-top: 15px;
  width: 100%;
  height: 100%;

}
.reviewText::-webkit-scrollbar {
  display: none;
}
.review{
  display: flex;
  flex-direction: column;
  background: white;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
  min-width: 31%;
  min-height: 80%;
}
.review::-webkit-scrollbar {
  display: none;
}
</style>