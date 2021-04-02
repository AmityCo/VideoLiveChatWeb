<template>
  <div id="ChatBox">
    <b-collapse class="card" animation="slide" aria-id="contentIdForA11y3">
      <template #trigger="props">
        <chat-box-header :collapsed="props.open"/>
      </template>

      <div class="card-content" style="padding: 0.5rem 0.5rem">
        <chat-message />
      </div>
      <div class="card-content" style="padding: 0.5rem 0.5rem">
        <chat-message />
      </div>
      <div class="card-content" style="padding: 0.5rem 0.5rem">
        <chat-message />
      </div>
      <div class="card-content" style="padding: 0.5rem 0.5rem">
        <chat-message />
      </div>
            <div class="card-content" style="padding: 0.5rem 0.5rem">
        <chat-message />
      </div>
            <div class="card-content" style="padding: 0.5rem 0.5rem">
        <chat-message />
      </div>
            <div class="card-content" style="padding: 0.5rem 0.5rem">
        <chat-message />
      </div>
      <chat-input />
    </b-collapse>
  </div>
</template>

<script>
import ChatBoxHeader from "@/components/chatbox/ChatBoxHeader.vue";
import ChatInput from "@/components/chatbox/ChatInput.vue";
import ChatMessage from "@/components/message/ChatMessage.vue";

export default {
  name: "ChatBox",
  components: {
    ChatBoxHeader,
    ChatInput,
    ChatMessage,
  },
};
</script>

<style>
.chat-header {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  padding: 0.75rem 1rem;
}
</style>