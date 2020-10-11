<template lang="pug">
div(v-if="chosenMessageId == -1")
  div(class="container-messages")
    h1(class="chat-header header page-text centered-flex") 
      div Chats  
    div(class="icon-container-1") 
      div(class="centered-flex-content")
        img(class="icon" src="../assets/pics/default_user.png")
    div(class="icon-container-2")
      div(class="centered-flex-content")
        img(class="icon" src="../assets/pics/default_user.png")
    div(class="message-and-name-container-1 message-and-name-container" id="0" v-on:click="goToChat()")
      div(class="name-container centered-flex") 
        div() Avani Hancock
      div(class="message-container centered-flex") 
        div() Hello, I really liked your video presentation, can we appoint a lesson?
    div(class="message-and-name-container-2 message-and-name-container" id="1" v-on:click="goToChat()") 
      div(class="name-container centered-flex")
        div(class="name") Lucille Wilkerson
      div(class="message-container")
        div(class="centered-flex message-container") 
          div() I really liked your video lessons, can we appoint a lesson?
div(v-else)
  div(class="container-chat")
    div(class="back-button-container")
      button(value="<-" class="button" v-on:click="goToAllMessages()") < Back
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
  name: 'Chat',
  data() {
    return {
      chosenMessageId: -1,
    }
  },
  methods: {
    goToChat() {
      this.chosenMessageId = event.currentTarget.id;
    },
    goToAllMessages() {
      this.chosenMessageId = -1;
    }
  }
}
</script>


<style scoped>
.img-sent{
  width: calc(2vw + 10px);
  height: calc(2vw + 10px);
}

.img-person {
  width: calc(3vw + 10px);
  height: calc(3vw + 10px);
}

.chat-name {
  font-size: calc(2vh + 10px);
}

textarea {
  resize: none;
  height: 100%;
  width: 100%;
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

.chat-name-container {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
}

.messages-container {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
  border: 1px solid var(--red-color);
}

.person-icon-container {
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 2;
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

.container-chat {
  display: grid;
  grid-template-rows: 10% 65% 25%;
  grid-template-columns: 8% 74% 18%;
  width: 90%;
  /*TODO*/
  height: 800px;
}

.container-messages {
  --chat-elements: 3;

  display: grid;
  grid-template-rows: 7% repeat(var(--chat-elements), 12%);
  grid-template-columns: 8% 70% 22%;
  width: 90%;
  /*TODO*/
  height: 800px;
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

</style>
