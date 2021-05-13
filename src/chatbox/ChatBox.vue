<template>
  <div id="ChatBox">
    <chat-box-header />
    <chat-box-message-list :liveObject="liveChannel" :channelId="channelId" />
    <chat-box-input :channelId="channelId" />
  </div>
</template>

<script>
import ChatBoxHeader from "@/chatbox/main/ChatBoxHeader.vue";
import ChatBoxInput from "@/chatbox/main/ChatBoxInput.vue";
import ChatBoxMessageList from "@/chatbox/main/ChatBoxMessageList.vue";

import { ClientInstance } from "@/chatbox/sdkInstance";

import { EkoChannelType, ChannelRepository } from "eko-sdk";
const channelRepo = new ChannelRepository();

export default {
  name: "ChatBox",
  components: {
    ChatBoxHeader,
    ChatBoxInput,
    ChatBoxMessageList,
  },
  props: ["api_key", "userId", "channelId"],
  data: () => ({
    current_key: "",
    liveChannel: {}
  }),
  watch: {
    current_key: function (val) {
      ClientInstance.init(val);
      ClientInstance.registerUserSession(this.userId)
      this.joinUserToChannel(this.channelId, EkoChannelType.Standard);
    },
  },
  methods: {
    joinUserToChannel(channelId, type) {
      this.liveChannel = channelRepo.joinChannel({
        channelId,
        type,
      });
      this.liveChannel.once("dataUpdated", (data) => {
        console.log("Channel data update: ", data);
      });
    },
  },
  beforeMount() {
    this.current_key = this.api_key;
  },
};
</script>

<style scoped>
#ChatBox {
  border: 1px #e0e0e0 solid;
}
</style>
