<template>
  <div id="ChatBox">
    <b-collapse class="card" animation="slide" aria-id="contentIdForA11y3">
      <template #trigger="props">
        <chat-box-header :collapsed="props.open" />
      </template>

      <chat-message-list></chat-message-list>
      <!-- <div
        v-for="(message, index) in messages"
        :key="index"
        class="card-content"
        style="padding: 0.5rem 0.5rem"
      >
        <chat-message />
      </div> -->

      <chat-input />
    </b-collapse>
  </div>
</template>

<script>
import ChatBoxHeader from "@/components/chatbox/ChatBoxHeader.vue";
import ChatInput from "@/components/chatbox/ChatInput.vue";
import ChatMessageList from "@/components/message/ChatMessageList.vue";

export default {
  name: "ChatBox",
  components: {
    ChatBoxHeader,
    ChatInput,
    ChatMessageList,
  },
  data() {
    return {
      messages: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
    };
  },
};
</script>
