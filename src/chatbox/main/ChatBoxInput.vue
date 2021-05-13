<template>
  <div id="ChatInput">
    <header class="card-header">
      <div class="card-header-title">
        <profile-picture class="icon-padding" />
        <b-input
          rounded
          class="expanded"
          placeholder="Say Somthing..."
          v-model="inputMessages"
          @keyup.native.enter="submitMessage"
        ></b-input>
      </div>
      <div
        class="card-header-icon"
        aria-label="more options"
        @click="submitMessage"
      >
        <!-- Modify string in icon="" to change icon -->
        <b-icon icon="send" />
      </div>
    </header>
  </div>
</template>

<script>
import { MessageRepository } from "eko-sdk";
const messageRepo = new MessageRepository();

import ProfilePicture from "@/chatbox/message/ProfilePicture.vue";

export default {
  name: "ChatInput",
  components: {
    ProfilePicture,
  },
  data: () => ({
    inputMessages: null,
  }),
  props: ["channelId"],
  methods: {
    submitMessage() {
      if (this.inputMessages?.trim().length) {
        messageRepo.createTextMessage({
          channelId: this.channelId,
          text: this.inputMessages,
        });
        this.inputMessages = null;
        this.$emit("sent");
      }
    },
  },
};
</script>

<style scoped>
#ChatInput {
  background-color: white;
  border-top: 1px #e0e0e0 solid;
}
.icon-padding {
  padding-left: 0.4rem;
  padding-right: 1rem;
}
.expanded {
  width: 100%;
}
.card-header-title {
  padding-right: 0px;
}
</style>
