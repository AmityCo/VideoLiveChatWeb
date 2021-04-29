<template>
  <div id="MyReactionList">
    <div class="block">
      <b-icon
        v-for="reaction in reaction_list"
        class="reaction-icon"
        :key="reaction.name"
        :icon="reaction.name"
        :type="reaction.color"
        @click.native="reactOnMessage(reaction.name)"
      />
    </div>
  </div>
</template>

<script>
import { REACTION_LIST } from "@/config";
import { MessageRepository, ReactorRepository } from "eko-sdk";
const messageRepo = new MessageRepository();

export default {
  name: "MyReactionList",
  props: ["messageId"],
  computed: {
    reaction_list: () => REACTION_LIST,
  },
  methods: {
    reactOnMessage(name) {
      const liveObject = messageRepo.messageForId(this.messageId);
      const messageModel = liveObject.model;
      const reactorRepo = new ReactorRepository(messageModel);
      reactorRepo.addReaction(name);
      this.$emit("reacted");
    },
  },
};
</script>

<style scoped>
.reaction-icon {
  cursor: pointer;
  margin: 0.2rem 0.4rem;
}
</style>
