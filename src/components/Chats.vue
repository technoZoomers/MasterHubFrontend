<template lang="pug">
div(class="container-messages")
  h1(class="chat-header header page-text centered-flex") 
    div Chats  
  div(class="icon-container-1") 
    div(class="centered-flex-content")
      img(class="icon" src="../assets/pics/default_user.png")
  div(class="icon-container-2")
    div(class="centered-flex-content")
      img(class="icon" src="../assets/pics/default_user.png")
  router-link(to="/dialog/0" tag="div" class="message-and-name-container-1 message-and-name-container" id="0")
    div(class="name-container centered-flex") 
      div() Avani Hancock
    div(class="message-container centered-flex") 
      div() Hello, I really liked your video presentation, can we appoint a lesson?

  router-link(to="/dialog/1" tag="div" class="message-and-name-container-2 message-and-name-container" id="1") 
    div(class="name-container centered-flex")
      div(class="name") Lucille Wilkerson
    div(class="message-container")
      div(class="centered-flex message-container") 
        div() I really liked your video lessons, can we appoint a lesson?
</template>

<script>
export default {
  name: 'Chat',
}
</script>


<style scoped>
.container-messages {
  --chat-elements: 3;

  display: grid;
  grid-template-rows: 7% repeat(var(--chat-elements), 12%);
  grid-template-columns: 8% 70% 22%;
  height: calc(70vh + 100px);
  width: calc(70vw + 100px);
}

.chat-header {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
}

.header {
  text-align: left;
}

.name-container {
  height: 40%;
  font-family: var(--project-font);
  font-size: calc(1vh + 10px);
  font-weight: bold;
}

.message-container {
  font-family: var(--project-font);
  height: 60%;
  font-size: calc(0.7vh + 15px);
}

.icon-container-1 {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
}

.icon-container-2 {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 3;
  grid-row-end: 4;
}

.message-and-name-container-1 {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;

  display: flex;
  flex-direction: column;
}

.message-and-name-container-2 {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 3;
  grid-row-end: 4;

  display: flex;
  flex-direction: column;
}

.message-and-name-container:hover {
  background-color: var(--hover-color);
}

.icon {
  max-width: 45%;
  max-height: 50%;
}

.centered-flex-content {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.centered-flex {
  display: flex;
  align-items: center;
}
</style>
