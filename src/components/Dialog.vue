<template lang="pug">
div(class="container-chat")
  div(class="back-button-container")
    router-link(to="/account/chats" tag="button" value="<-" class="button") < Back
  div(class="chat-name-container centered-flex-content")
    div(class="chat-name") Lucille Wilkerson
  div(class="person-icon-container centered-flex")
    img(class="img-person" src="../assets/pics/default_user.png")
  div(class="messages-container")
  div(class="textarea-container")
      textarea
  div(class="sent-button-container")
    img(class="img-sent" src="../assets/pics/sent.png")
</template>

<script>
export default {
  name: 'Dialog',
  data() {
    return {
    }
  },
  methods: {

  }
}
</script>


<style scoped>
.container-chat {
  display: grid;
  grid-template-rows: 10% 65% 25%;
  grid-template-columns: 8% 74% 18%;
  height: calc(70vh + 100px);
  width: calc(70vw + 100px);
}

.back-button-container {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;

  flex-direction: row-reverse;
  display: flex;
  align-items: center;
}

.button {
  background-color: var(--red-color);
  border: none;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: calc(1.5vh + 10px);
  border-radius: 10px;
  white-space: normal;
  outline:none;
  font: var(--project-font);
  height: 60%;
  width: 80%;
}

.chat-name-container {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
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

.chat-name {
  font-size: calc(2vh + 10px);
}

.person-icon-container {
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 2;
}

.img-sent{
  width: calc(2vw + 10px);
  height: calc(2vw + 10px);
}

.img-person {
  width: calc(3vw + 10px);
  height: calc(3vw + 10px);
}

textarea {
  resize: none;
  height: 100%;
  width: 100%;
}

.messages-container {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
  border: 1px solid var(--red-color);
}

.textarea-container {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 3;
  grid-row-end: 4;

  display: flex;
  align-items: center;
  justify-content: center;
}

.sent-button-container {
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 3;
  grid-row-end: 4;
}
</style>
