<template>
  <div id="ChatBox">
    <!-- <chat-box-header/> -->
    <chat-box-message-list
      v-if="isJoined"
      :channelId="channelId"
      @messages_found="stopJoinChannel()"
    />
    <chat-box-input :channelId="channelId" />
  </div>
</template>

<script>
import ChatBoxInput from "@/chatbox/main/ChatBoxInput.vue";
import ChatBoxMessageList from "@/chatbox/main/ChatBoxMessageList.vue";

import { ClientInstance } from "@/chatbox/sdkInstance";

import { ChannelType, ChannelRepository } from "@amityco/js-sdk";
const channelRepo = new ChannelRepository();

import { CHATBOX_STYLE } from "@/chatbox/config";

export default {
  name: "ChatBox",
  components: {
    ChatBoxInput,
    ChatBoxMessageList,
  },
  provide: {
    font_color: CHATBOX_STYLE.font_color,
    chat_color: CHATBOX_STYLE.chat_color,
    composer_color: CHATBOX_STYLE.composer_color,
  },
  props: ["api_key", "userId", "channelId"],
  data: () => ({
    isJoined: false,
    isFoundMessages: false,
  }),
  watch: {
    channelId: function (newVal) {
      this.joinUserToChannel(newVal, ChannelType.Standard);
    },
  },
  methods: {
    stopJoinChannel() {
      this.isFoundMessages = true;
    },
    joinUserToChannel(channelId, type) {
      console.log("joinUserToChannel");
      this.isJoined = false;
      const liveChannel = channelRepo.joinChannel({ channelId, type });
      const callback = (data) => {
        this.isJoined = true;
        console.log("dataUpdated", data);
      };
      if (!liveChannel.model) {
        this.isJoined = true;
        liveChannel.once("dataUpdated", callback);
        liveChannel.once("dataError", () => {
          if (!this.isFoundMessages) {
            setTimeout(this.joinUserToChannel(channelId, type), 500);
          }
        });
      } else {
        callback(liveChannel.model);
      }
    },
  },
  beforeMount() {
    ClientInstance.init(this.api_key);
    ClientInstance.registerUserSession(this.userId);
    this.joinUserToChannel(this.channelId, ChannelType.Standard);
  },
};
</script>

<style scoped>
#ChatBox {
  border: 1px #e0e0e0 solid;
}
</style>
