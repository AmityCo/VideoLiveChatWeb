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
      <b-message>
        <p class="text"> {{ messageModel.data.text }} </p>
        <span></span>
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
  methods: {
    reportMessage: function () {
      alert("Hello !");
    },
  },
  data() {
    return {
      active: false,
    };
  },
};
</script>

<style scoped>
.text {
  font-size: 1rem;
  font-weight: 400;
}

</style>
