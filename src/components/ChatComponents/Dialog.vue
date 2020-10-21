<template lang="pug">
div.container-chat-flex
  div.container-chat-grid
    div.top-border-container
    div.back-button-container
      router-link(to="/account/chats")
        img.icon-chat(src="../../assets/pics/back-button.svg")
    div.chat-name-container.centered-flex-content
      div.chat-name Lucille Wilkerson
    div.person-icon-container.centered-flex
      img.icon-chat(src="../../assets/pics/videocall-button.svg")
      img.icon-chat(src="../../assets/pics/default_user.png")
    div.color-container
    div.messages-grid
      div.messages-flex
        div.one-message-flex
          img.icon-chat(src="../../assets/pics/default_user.png")
          div.messages-text Hi, do you have lessons on the weekend?
    div.bottom-border-container
    div.textarea-container
      div.textarea-flex
        textarea(@input="showSendIcon")
    div(class="sent-button-container invisible-image" id="sent-button")
      img(class="img-sent" src="../../assets/pics/sent.png")
</template>

<script>
export default {
  name: 'Dialog',
  data() {
    return {
    }
  },
  methods: {
    showSendIcon() {
      const sentButton = document.getElementById('sent-button');
      console.log(sentButton.classList);
      sentButton.classList.remove('invisible-image');
      console.log(sentButton.classList);
    }
  }
}
</script>


<style scoped>

textarea {
  border: none;
}

.one-message-flex {
  display: flex;
  flex-direction: row;
}
.messages-flex {
  display: flex;
  flex-direction: column-reverse;
  background-color: white;
  z-index: 100;
  height: 80%;
  width: 100%;
}

.textarea-flex {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70%;
  width: 100%;
}

.invisible-image {
  display: none;
}

.container-chat-flex {

  display: flex;
  justify-content: center;
  align-items: center;

  height: calc(70vh + 100px);
  width: calc(60vw + 100px);
}

.container-chat-grid {
  display: grid;
  grid-template-rows: 10% 80% 10%;
  grid-template-columns: 14% 72% 14%;

  height: 100%;
  width: 80%;
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

.icon-chat {
  width: calc(4vh + 10px);
  height: calc(4vh + 10px);
  padding: 5px;
}

textarea {
  resize: none;
  height: 100%;
  width: 100%;
}

.messages-grid {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;

  display: grid;
  align-items: center;
}

.messages-text {
  font-size: calc(2vh + 4px);
  padding: 15px;
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

.bottom-border-container {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 3;
  grid-row-end: 4;

  background: var(--chat-color-intensive);
  z-index: -100;
}

.top-border-container {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 2;
  background: var(--chat-color-intensive);
}

.color-container {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;
  background-color: var(--chat-color);
}

.sent-button-container {
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 3;
  grid-row-end: 4;
}
</style>
