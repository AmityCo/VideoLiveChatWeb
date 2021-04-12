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
      <div
        class="card-header-icon"
        aria-label="more options"
      >
        <b-icon icon="dots-vertical" />
      </div>
    </header>
      </DynamicScrollerItem>
    </template>

    <!-- <template v-slot="{ item }">
      <chat-message :message="item" />
    </template> -->
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
