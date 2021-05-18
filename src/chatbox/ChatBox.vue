<template>
  <div id="ChatBox">
    <chat-box-header />
    <chat-box-message-list v-if="isJoined" :channelId="channelId" />
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
    isJoined: false,
  }),
  watch: {
    channelId: function (newVal) {
      this.joinUserToChannel(newVal, EkoChannelType.Standard);
    },
  },
  methods: {
    joinUserToChannel(channelId, type) {
      console.log("joinUserToChannel");
      this.isJoined = false;
      const liveChannel = channelRepo.joinChannel({ channelId, type });
      const callback = (data) => {
        console.log("dataUpdated", data);
      };
      console.log(liveChannel.model);
      if (!liveChannel.model) {
        this.isJoined = true;
        liveChannel.once("dataUpdated", callback);
      } else {
        callback(liveChannel.model);
      }
    },
  },
  beforeMount() {
    ClientInstance.init(this.api_key);
    ClientInstance.registerUserSession(this.userId);
    this.joinUserToChannel(this.channelId, EkoChannelType.Standard);
  },
};
</script>

<style scoped>
#ChatBox {
  border: 1px #e0e0e0 solid;
}
</style>
