<template>
  <div id="ChatInput">
    <header class="card-header">
      <div class="card-header-title">
        <avatar style="padding-left: 0.5rem; padding-right: 1rem" />
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

import Avatar from "@/components/message/Avatar.vue";

export default {
  name: "ChatInput",
  components: {
    Avatar,
  },
  data() {
    return {
      inputMessages: null,
    };
  },
  computed: {
    ...mapState({
      channel: (state) => state.channel,
    }),
  },
  methods: {
    submitMessage: function () {
      if (this.inputMessages && this.inputMessages !== "") {
        const messageLiveObject = messageRepo.createTextMessage({
          channelId: this.channel,
          text: this.inputMessages,
        });
        console.log("createTextMessage: ", messageLiveObject);
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
.card-header-title {
  padding-right: 0px;
}
</style>
