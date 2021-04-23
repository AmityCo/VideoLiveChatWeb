<template>
  <div class="card has-text-left">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <profile-picture v-bind="message" />
        </div>
        <div class="media-content">
          <message-description v-bind="message" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProfilePicture from "@/components/message/ProfilePicture.vue";
import MessageDescription from "@/components/message/MessageDescription.vue";

export default {
  name: "ChatMessage",
  props: ["message"],
  components: {
    ProfilePicture,
    MessageDescription,
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
