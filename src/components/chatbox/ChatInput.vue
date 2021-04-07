<template>
  <div id="ChatInput">
    <header class="card-header">
      <p class="card-header-title" style="padding-right: 0px">
        <b-input
          rounded
          class="expanded"
          placeholder="No label"
          v-model="inputMessages"
          @keyup.native.enter="submitMessage"
        ></b-input>
      </p>
      <div
        class="card-header-icon"
        aria-label="more options"
        @click="submitMessage"
      >
        <b-icon icon="send" />
      </div>
    </header>
  </div>
</template>

<script>
import { MessageRepository } from "eko-sdk";
const messageRepo = new MessageRepository();

export default {
  name: "ChatInput",
  data() {
    return {
      channel: "video-livechat",
      inputMessages: null,
      model: null
    };
  },
  methods: {
    submitMessage: function () {
      const messageLiveObject = messageRepo.createTextMessage({
        channelId: this.channel,
        text: this.inputMessages,
      });
      console.log(messageLiveObject);
      this.inputMessages = null
    },
  }
};
</script>

<style scoped>
.expanded {
  width: 100%;
}
</style>
