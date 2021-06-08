<template>
  <div id="ChatBox">
    <chat-box-message-list v-if="channel" :key="channelId" :channelId="channelId" />
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

  props: ["apiKey", "userId", "channelId"],

  data: () => ({
    channel: null,

    isJoined: false,
    isFoundMessages: false,
  }),

  watch: {
    channelId: function (newVal) {
      this.joinUserToChannel(newVal);
    },
  },

  beforeMount() {
    ClientInstance.init(this.apiKey);

    ClientInstance.registerUserSession(this.userId, () => {
      this.joinUserToChannel(this.channelId);
    });
  },

  methods: {
    joinUserToChannel(channelId, type = ChannelType.Standard) {
      this.channel = null;

      const liveChannel = channelRepo.joinChannel({
        channelId,
        type,
      });

      const callback = (data) => {
        this.channel = data;
        console.log("the channel has", this.channel.messageCount, "messages.");
      };

      liveChannel.once("dataUpdated", callback);
      liveChannel.model && callback(liveChannel.model);

      liveChannel.once("dataError", async () => {
        // the error indicates that the displayName wasn't set. in that case:
        // 1. just run the setDisplayName method
        await channelRepo.setDisplayName({ channelId, displayName: channelId });
        // 2. clean the instance
        liveChannel.dispose();
        // 3. retry
        this.joinUserToChannel(channelId, type);
      });
    },
  },
};
</script>

<style scoped>
#ChatBox {
  border: 1px #e0e0e0 solid;
}
</style>
