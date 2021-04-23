<template>
  <div id="MessageDescription">
    <b-tooltip
      type="is-light"
      :triggers="['click']"
      :auto-close="['outside', 'escape']"
    >
      <template v-slot:content>
        <my-reaction-list :messageId="messageId" />
      </template>
      <b-message class="transparent-bg">
        <p class="text">
          <b class="username"> {{ username }}</b>
          {{ data.text }}
        </p>
        <message-reaction :messageReactions="myReactions" />
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
  props: ["messageId", "user", "data", "myReactions"],
  computed: {
    username: ({ user }) =>
      user?.model?.displayName ?? user?.model?.userId ?? "anonymous",
  },
};
</script>

<style scoped>
#MessageDescription {
  cursor: pointer;
}
.text {
  color: #111111;
  font-size: 1rem;
  font-weight: 400;
}

.username {
  color: #11111179;
}
</style>
