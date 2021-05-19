<template>
  <div id="ChatInput" :style="css_vars">
    <header class="card-header">
      <div class="card-header-title">
        <profile-picture class="icon-padding" />
        <b-input
          rounded
          class="expanded"
          placeholder="Say Somthing..."
          v-model="inputMessages"
          custom-class="inputstyle"
          @keyup.native.enter="submitMessage"
        ></b-input>
      </div>
      <div
        class="card-header-icon"
        aria-label="more options"
        @click="submitMessage"
      >
        <!-- Modify string in icon="" to change icon -->
        <b-icon icon="send" class="fontstyle" />
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
  inject: ["section_color", "font_color"],
  computed: {
    css_vars() {
      return {
        /* variables you want to pass to css */
        "--color": this.section_color,
        "--font": this.font_color,
      };
    },
  },
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

<style>
#ChatInput {
  border-top: 1px #e0e0e0 solid;
  background-color: var(--color);
}

.inputstyle {
  background-color: var(--color);
  border-color: #dbdbdb;
  border-radius: 4px;
  color: var(--font);
}

.fontstyle {
  color: var(--font);
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
