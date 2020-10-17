<template lang="pug">
  div.searchField
    form( @submit.prevent="search")
      input(type="text" placeholder="Искать здесь..." ref="searchValue")
</template>

<script>
export default {
name: "SearchField",
  methods:{
    search(){
      event.preventDefault()
      console.log("search ", this.$refs.searchValue.value) // request
    }
  }
}
</script>

<style scoped>
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