<template>
  <div id="MessageReaction" :style="css_vars">
    <b-taglist attached>
      <b-tag
        rounded
        v-for="(value, key) in messageReactions"
        :key="key"
        class="tagstyle"
      >
        <b-icon :icon="key" size="is-small" /> {{ value }}
      </b-tag>
    </b-taglist>
  </div>
</template>

<script>
export default {
  name: "MessageReaction",
  props: ["messageReactions"],
  inject: ["chat_color", "font_color"],
  computed: {
    css_vars() {
      return {
        /* variables you want to pass to css */
        "--color": this.chat_color,
        "--font": this.font_color,
      };
    },
  },
};
</script>

<style scoped>
.tagstyle {
  background-color: var(--color);
  color: var(--font);
}
</style>
