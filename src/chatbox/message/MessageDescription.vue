<template>
  <div id="MessageDescription">
    <b-tooltip
      type="is-light"
      :triggers="['click']"
      :auto-close="['outside', 'escape']"
      :active="active"
    >
      <template v-slot:content>
        <my-reaction-list
          @reacted="actionAfterReacted()"
          :messageId="messageId"
        />
      </template>
      <div @click="active = true">
        <b-message type="transparent-bg">
          <p class="text">
            <b class="username"> {{ username }}</b>
            {{ data.text }}
          </p>
          <message-reaction
            v-if="reactionsCount > 0"
            :messageReactions="reactions"
          />
        </b-message>
      </div>
    </b-tooltip>
  </div>
</template>

<script>
import MyReactionList from "@/chatbox/reaction/MyReactionList.vue";
import MessageReaction from "@/chatbox/reaction/MessageReaction.vue";

export default {
  name: "MessageDescription",
  components: {
    MyReactionList,
    MessageReaction,
  },
  props: ["messageId", "user", "data", "reactions", "reactionsCount"],
  computed: {
    username: ({ user }) => {
      if (user?.model?.displayName && user?.model?.displayName !== "") {
        return user?.model?.displayName;
      } else {
        return user?.model?.userId;
      }
    },
  },
  data: () => ({
    active: false,
  }),
  methods: {
    actionAfterReacted() {
      // Programatically close the tooltip
      this.active = false;
    },
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
  padding-bottom: 0.25rem;
}

.username {
  color: #11111179;
}
</style>
