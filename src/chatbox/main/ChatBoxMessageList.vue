<template>
  <DynamicScroller
    class="scroller"
    ref="messagelist"
    :items="messages_data"
    :min-item-size="128"
    key-field="messageId"
  >
    <template v-slot="{ item, index, active }">
      <DynamicScrollerItem
        :item="item"
        :active="active"
        :size-dependencies="[item.data.text]"
        :data-index="index"
      >
        <header class="card-header">
          <div class="card-header-title" style="padding-right: 0px">
            <chat-message :message="item" />
          </div>
          <div class="card-header-icon" aria-label="more options">
            <message-options
              :messageModel="item"
              :lastChild="index == messages_data.length - 1"
            />
          </div>
        </header>
      </DynamicScrollerItem>
    </template>
  </DynamicScroller>
</template>

<script>
import { DynamicScroller } from "vue-virtual-scroller";
import { MessageRepository } from "eko-sdk";
const messageRepo = new MessageRepository();

import ChatMessage from "@/chatbox/message/ChatMessage.vue";
import MessageOptions from "@/chatbox/message/MessageOptions.vue";

export default {
  name: "ChatBoxMessageList",
  components: {
    ChatMessage,
    MessageOptions,
    DynamicScroller,
  },
  props: ["channelId"],
  data: () => ({
    messages_data: [],
  }),
  beforeMount() {
    this.liveCollection = messageRepo.messagesForChannel({
      channelId: this.channelId,
    });
    this.liveCollection.on("dataUpdated", (data) => {
      // reload messages table
      const filtered = data.filter((msg) => !msg.isDeleted);
      this.messages_data = filtered.reverse();
      this.$refs.messagelist.scrollToBottom();
    });

    this.liveCollection.on("dataError", (error) => {
      console.log(
        "Message LiveCollections can not query/get/sync data from server",
        error
      );
      this.$buefy.snackbar.open({
        message: "error: " + error,
        indefinite: true,
        type: "is-danger",
        actionText: "OK",
        queue: false,
      });
    });
  },
  beforeDestroy() {
    // unobserve data changes once you are finished
    this.liveCollection.removeAllListeners("dataUpdated");
    this.liveCollection.removeAllListeners("dataError");
  },
};
</script>

<style scoped>
.scroller {
  height: 60vh;
}
</style>
