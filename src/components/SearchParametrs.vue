<template lang="pug">
  div.popular
    div.popular_items(v-for="item in items")
      div.item(@click="selectedItem") {{item}}

</template>

<script>
export default {
  name: "SearchParametrs",
  data() {
    return {
      items: ["Языки ", "Спорт ", "Музыка ", "Автомобили ", "Кулинария ", "Танцы ", "Наука ", "IT", "Дизайн","Живопись"]
    }
  },
  methods:{
    selectedItem(e){
      console.log('selected', e.target.innerHTML) // request
    }
  }
}
</script>

<style scoped>
.popular_items{
  display: flex;
  flex-direction: row;
}
.item{
  margin: 10px;
}
.item:hover{
  color: #ff736a;
}
.popular{
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
}
.popular::-webkit-scrollbar {
  display: none;
}
</style>