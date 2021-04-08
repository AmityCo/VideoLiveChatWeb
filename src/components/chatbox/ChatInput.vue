<template>
  <div id="ChatInput">
    <header class="card-header">
      <p class="card-header-title" style="padding-right: 0px">
        <b-input
          rounded
          class="expanded"
          placeholder="Type Your Meassage Here"
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
    };
  },
  methods: {
    submitMessage: function () {
      if (this.inputMessages && this.inputMessages !== "") {
        const messageLiveObject = messageRepo.createTextMessage({
          channelId: this.channel,
          text: this.inputMessages,
        });
        console.log(messageLiveObject);
        this.inputMessages = null;
      }
    },
  },
};
</script>

<style scoped>
.expanded {
  width: 100%;
}
</style>
