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
import { ReactorRepository } from "eko-sdk";

export default {
  name: "MyReactionList",
  props: ["messageModel"],
  data() {
    return {
      reaction_list: [
        { name: "heart", color: "is-danger" },
        { name: "thumb-up", color: "is-success" },
        { name: "thumb-down", color: "is-info" },
        { name: "emoticon-cool", color: "is-warning" },
      ],
    };
  },
  methods: {
    reactOnMessage: function (name) {
      const reactorRepo = new ReactorRepository(this.messageModel);
      reactorRepo.addReaction(name);
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
