<template lang="pug">
div.chat-item-container
  div.icon-container
    div.centered-flex-content
      img.icon(:src="`${userImage}`")
  router-link(to="/account/dialog/" tag="div" class="message-and-name-container")
    div.name-container.centered-flex 
      div.name {{ name }}
    div.message-container.centered-flex {{ message }}
</template>

<script>
export default {
  name: "ChatListItem",
    props: {
    id: Number,
    userImage: String,
    name: String,
    message: String,
 },
}
</script>

<style>

.centered-flex-content {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.icon {
  max-width: 65%;
  max-height: 65%;
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

.chat-item-container {
  display: grid;
  grid-template-rows: 12%;
  grid-template-columns: 8% 70% 22%;

  padding-bottom: 2vh;
}

.icon-container {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
}

.message-and-name-container {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;

  display: flex;
  flex-direction: column;
  padding: 1vh;
  border-bottom: 1px solid;
  border-bottom-color: var(--red-color);
}

.message-and-name-container:hover {
  background-color: var(--hover-color);
}

</style>
