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
import { ReactorRepository } from "eko-sdk";

export default {
  name: "MyReactionList",
  props: ["messageModel"],
  computed: {
    reaction_list: () => REACTION_LIST,
  },
  methods: {
    reactOnMessage(name) {
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
