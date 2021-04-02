<template>
  <div class="list-group-wrapper">
    <transition name="fade">
      <div class="loading" v-show="loading">
        <span class="fa fa-spinner fa-spin"></span> Loading
      </div>
    </transition>
    <ul class="list-group" id="infinite-list">
      <li class="list-group-item" v-for="message in messages" :key="message">
        <div class="card-content" style="padding: 0.5rem 0.5rem">
          <chat-message />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import ChatMessage from "@/components/message/ChatMessage.vue";

export default {
  name: "ChatMessageList",
  components: {
    ChatMessage,
  },
  data() {
    return {
      messages: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
    };
  },
};
</script>

<style scoped>
.list-group-wrapper {
  position: relative;
}

.list-group {
  overflow: auto;
  height: 65vh;
}

.list-group-item {
  margin-top: 1px;
  border-left: none;
  border-right: none;
  border-top: none;
  border-bottom: 1px solid #e2e2e2;
}
</style>