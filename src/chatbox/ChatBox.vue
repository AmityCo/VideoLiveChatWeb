<template>
  <div id="ChatBox">
    <chat-box-message-list
      v-if="isJoined"
      :key="channelId"
      :channelId="channelId"
    />
    <chat-box-input :channelId="channelId" />
  </div>
</template>

<script>
import ChatBoxInput from "@/chatbox/main/ChatBoxInput.vue";
import ChatBoxMessageList from "@/chatbox/main/ChatBoxMessageList.vue";

import { ClientInstance } from "@/chatbox/sdkInstance";

import {
  ChannelType,
  ChannelRepository,
  ChannelMembershipRepository,
} from "@amityco/js-sdk";

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
      const channelUser = new ChannelMembershipRepository(channelId);

      this.membership = channelUser.myMembership;

      const callback = (model) => {
        this.isJoined = model.membership = "member";
      };

      this.membership.on("dataUpdated", callback);
      this.membership.model && callback(this.liveObject.model);

      new ChannelRepository().joinChannel({
        channelId,
        type,
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
