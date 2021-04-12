<template>
  <div class="card has-text-left">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <avatar v-if="isAvatar" :image="message" />
          <avatar v-else />
        </div>
        <div class="media-content">
          <message-title :text="username" />
          <message-description :messageModel="message" :message_id="message.messageId" :text="message.data.text" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from "@/components/message/Avatar.vue";
import MessageTitle from "@/components/message/MessageTitle.vue";
import MessageDescription from "@/components/message/MessageDescription.vue";

export default {
  name: "ChatMessage",
  props: ["message"],
  components: {
    Avatar,
    MessageTitle,
    MessageDescription
  },
  computed: {
    isAvatar: function () {
      const user_model = this.message.user.model;
      return user_model.avatarFileId ? true : false;
    },
    username: function () {
      const user_model = this.message.user.model;
      if (user_model.displayName) {
        return user_model.displayName;
      } else {
        return user_model.userId;
      }
    },
  },
};
</script>

<style scoped>
.card {
  background-color: transparent;
  box-shadow: none;
}

.card-content {
  padding: 0.25rem;
}

.media-content {
  overflow-x: unset !important;
}

.spaced {
  padding: 0 1.5rem;
}
</style>
