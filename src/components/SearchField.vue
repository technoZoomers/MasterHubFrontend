<template lang="pug">
  div.searchField(data-tooltip="if you want to start playing guitar, then enter 'guitar', if you want to add some music to your life but still don't know what type, just enter 'music'")
    form( @submit.prevent="search")
      input(type="text" placeholder="Search here..." ref="searchValue")
</template>

<script>
export default {
name: "SearchField",
  methods:{
    search(){
      event.preventDefault()
      console.log("search ", this.$refs.searchValue.value) // request
      document.querySelector('.parameters').style.visibility='visible'
    }
  }
}
</script>

<style scoped>
[data-tooltip] {
  position: relative; /* Относительное позиционирование */
}
[data-tooltip]::after {
  content: attr(data-tooltip); /* Выводим текст */
  position: absolute; /* Абсолютное позиционирование */
  width: 300px; /* Ширина подсказки */
  left: 0; top: 0; /* Положение подсказки */
  background: #3989c9; /* Синий цвет фона */
  color: #fff; /* Цвет текста */
  padding: 0.5em; /* Поля вокруг текста */
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3); /* Параметры тени */
  pointer-events: none; /* Подсказка */
  opacity: 0; /* Подсказка невидима */
  transition: 1s; /* Время появления подсказки */
  border-radius: 3px;
}
[data-tooltip]:hover::after {
  opacity: 1; /* Показываем подсказку */
  top: 3em; /* Положение подсказки */
}
.searchField{
  display: flex;
  flex-direction: column;
}
* {box-sizing: border-box;}
form {
  width: auto;
  margin-right: 30px;
}
input:focus {
  border-color: #FF736A;
}
input {
  width: 250px;
  height: 42px;
  padding-left: 15px;
  border-radius: 3px;
  border: 1px solid rgba(0,0,0,0.5);
  background: white;
  outline: none;
  position: relative;
  transition: .3s linear;
}
input:focus {
  width: 300px;
}
button {
  width: 42px;
  height: 42px;
  background: none;
  border: none;
  position: absolute;
  top: -2px;
  right: 0;
}

/*button:before {*/
/*  content: "🔍";*/
/*  font-size: 20px;*/
/*}*/

</style>