<template>
  <div id="MessageReaction">
    <b-taglist attached>
      <b-tag
        rounded
        v-for="(value, key) in messageReactions"
        :key="key"
        type="is-light"
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
};
</script>

<style></style>
