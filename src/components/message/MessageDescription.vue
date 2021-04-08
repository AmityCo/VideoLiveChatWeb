<template>
  <div id="MessageDescription">
    <b-tooltip
      type="is-light"
      :triggers="['click']"
      :auto-close="['outside', 'escape']"
    >
      <template v-slot:content>
        <reaction-list />
      </template>
      <b-button :label="text" type="is-light" />
    </b-tooltip>
  </div>
</template>

<script>
import ReactionList from "@/components/reaction/ReactionList.vue";

export default {
  name: "MessageDescription",
  components: {
    ReactionList,
  },
  props: ["text"],
};
</script>

<style></style>
