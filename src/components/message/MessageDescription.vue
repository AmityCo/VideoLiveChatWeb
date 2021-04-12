<template>
  <div id="MessageDescription">
    <b-tooltip
      type="is-light"
      :triggers="['click']"
      :auto-close="['outside', 'escape']"
    >
      <template v-slot:content>
        <my-reaction-list :messageModel="messageModel" />
      </template>
      <b-message class="chatbox-secondary-bg">
        <p class="text">{{ messageModel.data.text }}</p>
        <message-reaction :messageReactions="messageModel.myReactions" />
      </b-message>
    </b-tooltip>
  </div>
</template>

<script>
import MyReactionList from "@/components/reaction/MyReactionList.vue";
import MessageReaction from "@/components/reaction/MessageReaction.vue";

export default {
  name: "MessageDescription",
  components: {
    MyReactionList,
    MessageReaction,
  },
  props: ["messageModel"],
};
</script>

<style scoped>
#MessageDescription {
  cursor: pointer;
}
.text {
  font-size: 1rem;
  font-weight: 400;
}
</style>
