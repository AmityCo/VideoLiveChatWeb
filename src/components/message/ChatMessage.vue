<template>
  <div class="card has-text-left">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <avatar :image="message"/>
        </div>
        <div class="media-content">
          <message-title :text="message"/>
          <message-description :text="message" />
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
};
</script>

<style scoped>
.card {
  box-shadow: none;
}
.card-content {
  padding: 0.2rem 0.5rem;
}
</style>