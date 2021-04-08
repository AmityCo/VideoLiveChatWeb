<template>
  <div id="ReactionList">
    <div class="block">
      <b-icon
        v-for="reaction in reaction_list"
        class="reaction-icon"
        :key="reaction.name"
        :icon="reaction.name"
        :type="reaction.color"
        @click.native="greet(reaction.name)"
      >
      </b-icon>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReactionList",
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
    greet: function (name) {
      // `this` inside methods point to the Vue instance
      alert("Hello " + name + "!");
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
