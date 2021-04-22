<template>
  <div id="ChatBox">
    <b-collapse class="card" animation="slide" aria-id="contentIdForA11y3">
      <template #trigger="props">
        <chat-box-header :collapsed="props.open" />
      </template>
      <chat-message-list />
      <chat-input />
    </b-collapse>
  </div>
</template>

<script>
import ChatBoxHeader from "@/components/chatbox/ChatBoxHeader.vue";
import ChatInput from "@/components/chatbox/ChatInput.vue";
import ChatMessageList from "@/components/message/ChatMessageList.vue";

import { EkoChannelType, ChannelRepository } from "eko-sdk";
const channelRepo = new ChannelRepository();

export default {
  name: "ChatBox",
  components: {
    ChatBoxHeader,
    ChatInput,
    ChatMessageList,
  },
  props: ["channelId"],
  mounted() {
    const liveChannel = channelRepo.joinChannel({
      channelId: this.channelId,
      type: EkoChannelType.Standard,
    });
    liveChannel.once("dataUpdated", (data) => {
      console.log("joinChannel: ", data);
    });
  },
};
</script>

<style scoped>
#ChatBox {
  border: 1px #e0e0e0 solid;
}
</style>
