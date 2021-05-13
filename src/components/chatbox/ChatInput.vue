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
        <b-icon icon="send" />
      </div>
    </header>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { MessageRepository } from "eko-sdk";
const messageRepo = new MessageRepository();

import ProfilePicture from "@/components/message/ProfilePicture.vue";

export default {
  name: "ChatInput",
  components: {
    ProfilePicture,
  },
  data: () => ({
    inputMessages: null,
  }),
  computed: {
    ...mapState({
      channel: (state) => state.channel,
    }),
  },
  methods: {
    submitMessage() {
      if (this.inputMessages?.trim().length) {
        messageRepo.createTextMessage({
          channelId: this.channel,
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
