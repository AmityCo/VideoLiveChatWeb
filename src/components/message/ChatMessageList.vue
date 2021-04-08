<template>
  <DynamicScroller
    ref="messagelist"
    :items="messages_data"
    :min-item-size="90"
    class="scroller"
    key-field="messageId"
  >
    <template v-slot="{ item }">
      <chat-message :message="item" />
    </template>
  </DynamicScroller>
</template>

<script>
import { DynamicScroller } from "vue-virtual-scroller";
import { MessageRepository } from "eko-sdk";
const messageRepo = new MessageRepository();
const messages = messageRepo.messagesForChannel({
  channelId: "video-livechat",
});

import ChatMessage from "@/components/message/ChatMessage.vue";

export default {
  name: "ChatMessageList",
  components: {
    ChatMessage,
    DynamicScroller,
  },
  data() {
    return {
      messages_data: [],
      messages_demo: ["A", "B", "C", "D"],
    };
  },
  beforeCreate() {
    messages.on("dataUpdated", (data) => {
      // reload messages table
      console.log("dataUpdated: ", data);

      const filtered = data.filter((msg) => !msg.isDeleted);
      console.log("filtered: ", filtered);

      this.messages_data = filtered.reverse();
      this.$refs.messagelist.scrollToBottom();
    });

    messages.on("dataError", (error) => {
      console.log(
        "Message LiveCollections can not query/get/sync data from server",
        error
      );
    });
  },
  beforeDestroy() {
    // unobserve data changes once you are finished
    messages.removeAllListeners("dataUpdated");
    messages.removeAllListeners("dataError");
  },
};
</script>

<style scoped>
.scroller {
  height: 65vh;
}
</style>
