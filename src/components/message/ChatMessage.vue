<template>
  <div class="card has-text-left">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <avatar v-if="isAvatar" :image="message" />
        </div>
        <div class="media-content">
          <message-description v-bind="message" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from "@/components/message/Avatar.vue";
import MessageDescription from "@/components/message/MessageDescription.vue";

export default {
  name: "ChatMessage",
  props: ["message"],
  components: {
    Avatar,
    MessageDescription,
  },
  computed: {
    isAvatar: ({ message }) => message?.user?.model?.avatarFileId,
    username: ({ message }) =>
      message?.user?.model?.displayName ??
      message?.user?.model?.userId ??
      "anonymous",
  },
};
</script>

<style scoped>
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
