<template lang="pug">
div.container-messages
  h1.chat-header
    div Chats
  div(v-for="item in items")
    chat-list-item(:id="item.id", :userImage="item.userImage", :name="item.name", :message="item.message")
</template>

<script>
import ChatListItem from "@/components/Body/Main/MasterAccount/Content/Pages/ChatComponents/ChatListItem";
export default {
  name: 'ChatList',
  components: {ChatListItem},
  data() {
    return {
      items: [
        {
          'id': 0,
          'userImage': require('../../../../../../../assets/pics/default_user.png'),
          'name': 'Lucille Wilkerson',
          'message': 'Hi, do you have lessons on the weekend?',
        },
        {
          'id': 1,
          'userImage': require('../../../../../../../assets/pics/default_user.png'),
          'name': 'Anna White',
          'message': 'I really liked your video lessons, can we appoint a lesson?',
        },
        {
          'id': 2,
          'userImage': require('../../../../../../../assets/pics/default_user.png'),
          'name': 'Avani Hancock',
          'message': 'Hello, I really liked your video presentation, can we appoint a lesson?',
        },
      ]
    }
  },
}
</script>


<style scoped>
.container-messages {
  display: flex;
  flex-direction: column;
  height: calc(70vh + 100px);
  width: calc(65vw + 60px);
}

.chat-header {
  text-align: left;
}

</style>
